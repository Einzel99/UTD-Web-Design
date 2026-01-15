const produtoOriginal = {
    id: 101,
    Nome: "Teclado Mecânico RGB",
    preco: 350,
    Categoria: ("periféricos", "setp-gamer", "promocoes"),
};

const {nome: Nome, preco: preço, ...detalhesLogistica} = produtoOriginal

  const preçoComDesconto = () => {
    console.log(preço - (preço*0.10))
}
    const prdutoComDesconto = {...produtoOriginal, preçoComDesconto}
    console.log(prdutoComDesconto)

