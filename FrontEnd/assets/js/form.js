const backendURL = "http://localhost:8000";

const nameEvent = document.getElementById("nome-evento");
const modelEvent = document.getElementById("modelo");
const urlEvent = document.getElementById("evento-url");
const typeEvent = document.getElementById("tipo");
const descriptionEvent = document.getElementById("descricao");
const formEvent = document.getElementById("formulario");
const date = document.getElementById("date");

formEvent.addEventListener("submit", (event) => {
  event.preventDefault();

  const body = {
    nome: nameEvent.value,
    descricao: descriptionEvent.value,
    tipo: typeEvent.value,
    modelo: modelEvent.value,
    local: urlEvent.value,
    data: date.value,
  };
  console.log("ok");

  fetch(`${backendURL}/criar`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) =>
      Toastify({
        text: "Formulário enviado",
        duration: 3000,
      }).showToast()
    );
});
