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

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzW5sULAvAKy3IfdjyUdpfG4TN8SK4ZF_3y8-IKuBHZ1o-hKXVGzebJtduiDLde16P4/exec",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    );

    const result = await response.json();

    document.getElementById("mensaje").innerHTML =
      "✅ Respuestas enviadas correctamente";

    document.getElementById("cronopiosForm").reset();

    mismoGeneroDiv.innerHTML = "";
    document.getElementById("dmSection").innerHTML = "";

  } catch(error) {

    console.log(error);

    document.getElementById("mensaje").innerHTML =
      "❌ Error enviando respuestas";

  }

});
