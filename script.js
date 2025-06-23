// Função para ler o arquivo JSON
async function lerProdutos() {
 const response = await fetch("product.json");
 const produtos = await response.json();
 return produtos;   
}

// Função para exibir o produto na div 
function exibirProduto(numero, produtos){
    const produto = produtos.find(p => p.id === numero);
    const div = document.querySelector("#prod");

    if (produto){
        div.innerHTML = `
        <h2>${produto.nome}</h2>
        <p>Valor: R$ ${produto.valor.toFixed(2)}</p>
        `;
    } else{
        div.innerHTML = "<p>Produto não encontrado"
}
}

// Evento de input no campo  de texto 
const leprod = document.getElementById("cbprod")
leprod.addEventListener("input", async function() {
  const numero = parseInt(this.value);
  const produtos = await lerProdutos();
  exibirProduto(numero, produtos);    
});