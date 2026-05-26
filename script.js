const caballeros = [
  "Bruno Nicolotti",
  "Matias Gallego",
  "Santi Brusco",
  "Coqui",
  "Marco Trombetta",
  "Santino",
  "Diego Putallaz",
  "Martin Zuccardi",
  "Gustavo Brusco",
  "Pablo Cymeryng"
];

const damas = [
  "Yami",
  "Yani",
  "Analia",
  "Sandra Forcher",
  "Gaby",
  "Dolores",
  "Mayra",
  "Florencia Riom"
];

const todos = [...caballeros, ...damas];

const jugadorSelect = document.getElementById("jugador");
const mismoGeneroDiv = document.getElementById("mismoGenero");
const dmSection = document.getElementById("dmSection");

function generarOpciones(lista, actual) {

  return lista
    .filter(j => j !== actual)
    .map(j => `<option value="${j}">${j}</option>`)
    .join("");

}

jugadorSelect.addEventListener("change", () => {

  const jugador = jugadorSelect.value;

  const esCaballero = caballeros.includes(jugador);

  const listaGenero = esCaballero ? caballeros : damas;

  mismoGeneroDiv.innerHTML = `
    <label>
      ${
        esCaballero
          ? "3- Dos compañeros con quienes mejor te sentís jugando DC"
          : "3- Dos compañeras con quienes mejor te sentís jugando DD"
      }
    </label>

    <select id="comp1" required>
      <option value="">Seleccionar</option>
      ${generarOpciones(listaGenero, jugador)}
    </select>

    <select id="comp2" required>
      <option value="">Seleccionar</option>
      ${generarOpciones(listaGenero, jugador)}
    </select>
  `;

  dmSection.innerHTML = `
    <label>
      5- Dos compañeros/as con quienes mejor te sentís jugando DM
    </label>

    <select id="dm1" required>
      <option value="">Seleccionar</option>
      ${generarOpciones(todos, jugador)}
    </select>

    <select id="dm2" required>
      <option value="">Seleccionar</option>
      ${generarOpciones(todos, jugador)}
    </select>
  `;

});

document
  .getElementById("cronopiosForm")
  .addEventListener("submit", async function(e){

  e.preventDefault();

  const data = {
    jugador: document.getElementById("jugador").value,
    lado: document.getElementById("lado").value,
    estilo: document.getElementById("estilo").value,
    comp1: document.getElementById("comp1").value,
    comp2: document.getElementById("comp2").value,
    dm1: document.getElementById("dm1").value,
    dm2: document.getElementById("dm2").value
  };

  try {

    await fetch(
      "https://script.google.com/macros/s/AKfycbzW5sULAvAKy3IfdjyUdpfG4TN8SK4ZF_3y8-IKuBHZ1o-hKXVGzebJtduiDLde16P4/exec",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    );

    document.getElementById("mensaje").innerHTML =
      "✅ Respuestas enviadas correctamente";

    document.getElementById("cronopiosForm").reset();

    mismoGeneroDiv.innerHTML = "";
    dmSection.innerHTML = "";

  } catch(error) {

    console.log(error);

    document.getElementById("mensaje").innerHTML =
      "❌ Error enviando respuestas";

  }

});
