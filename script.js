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

function generarOpciones(lista, jugadorActual) {

  return lista
    .filter(nombre => nombre !== jugadorActual)
    .map(nombre => `<option value="${nombre}">${nombre}</option>`)
    .join("");

}

jugadorSelect.addEventListener("change", () => {

  const jugador = jugadorSelect.value;

  const esCaballero = caballeros.includes(jugador);

  const listaMismoGenero = esCaballero ? caballeros : damas;

  mismoGeneroDiv.innerHTML = `
    <label>
      3- ${
        esCaballero
          ? "Dos compañeros con quienes mejor te sentís jugando DC"
          : "Dos compañeras con quienes mejor te sentís jugando DD"
      }
    </label>

    <select id="comp1" required>
      <option value="">Seleccionar</option>
      ${generarOpciones(listaMismoGenero, jugador)}
    </select>

    <select id="comp2" required>
      <option value="">Seleccionar</option>
      ${generarOpciones(listaMismoGenero, jugador)}
    </select>
  `;

  document.getElementById("dmSection").innerHTML = `
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
  .addEventListener("submit", function(e){

  e.preventDefault();

  const params = {
    jugador: document.getElementById("jugador").value,
    lado: document.getElementById("lado").value,
    estilo: document.getElementById("estilo").value,
    comp1: document.getElementById("comp1").value,
    comp2: document.getElementById("comp2").value,
    dm1: document.getElementById("dm1").value,
    dm2: document.getElementById("dm2").value,
    destino: "pcymeryng@gmail.com"
  };

  emailjs.send(
    "service_jyx6cwa",
    "template_545y4zc",
    params
  )
  .then(() => {

    document.getElementById("mensaje").innerHTML =
      "✅ Respuestas enviadas correctamente";

    document.getElementById("cronopiosForm").reset();

    mismoGeneroDiv.innerHTML = "";
    document.getElementById("dmSection").innerHTML = "";

  })
  .catch((error) => {

    console.log(error);

    document.getElementById("mensaje").innerHTML =
      "❌ Error enviando respuestas";

  });

});
