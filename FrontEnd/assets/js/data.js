const resultados = document.getElementById("resultado");

function preencherTabela(data) {
  data.forEach((item) => {
    const tr = document.createElement("tr");
    tr.classList.add("bg-white");

    tr.innerHTML = `<td class="px-6 py-4">${item.id}</td>
    <th class="px-6 py-4">${item.nome}</th>
    <td class="px-6 py-4">${item.descricao}</td>
    <td class="px-6 py-4">${item.tipo}</td>
    <td class="px-6 py-4">${item.local}</td>
    <td class="px-6 py-4">${item.modelo}</td>
    <td class="px-6 py-4">${item.data}</td>    
    `;
    resultados.appendChild(tr);
  });
}

fetch("http://localhost:8000/")
  .then((res) => res.json())
  .then((data) => preencherTabela(data));
