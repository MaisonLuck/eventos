const resultados = document.getElementById("resultado");

function preencherTabela(data) {
  data.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${item.id}</td>
    <td>${item.nome}</td>
    <td>${item.descricao}</td>
    <td>${item.tipo}</td>
    <td>${item.local}</td>
    <td>${item.modelo}</td>
    <td>${item.data}</td>    
    `;
    resultados.appendChild(tr);
  });
}

fetch("http://localhost:8000/")
  .then((res) => res.json())
  .then((data) => preencherTabela(data));
