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

const jugadorSelect = document.getElementById("jugador");
const mismoGeneroDiv = document.getElementById("mismoGenero");

jugadorSelect.addEventListener("change", () => {

  const jugador = jugadorSelect.value;

  if (caballeros.includes(jugador)) {

    mismoGeneroDiv.innerHTML = `
      <label>3- Dos compañeros con quienes mejor te sentís jugando DC</label>

      <input type="text" id="comp1" required placeholder="Compañero 1"/>
      <input type="text" id="comp2" required placeholder="Compañero 2"/>
    `;

  } else {

    mismoGeneroDiv.innerHTML = `
      <label>3- Dos compañeras con quienes mejor te sentís jugando DD</label>

      <input type="text" id="comp1" required placeholder="Compañera 1"/>
      <input type="text" id="comp2" required placeholder="Compañera 2"/>
    `;
  }
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
    "template_j8pvgze",
    params
  )
  .then(() => {

    document.getElementById("mensaje").innerHTML =
      "✅ Respuestas enviadas correctamente";

    document.getElementById("cronopiosForm").reset();

  })
  .catch((error) => {

    console.log(error);

    document.getElementById("mensaje").innerHTML =
      "❌ Error enviando respuestas";

  });

});