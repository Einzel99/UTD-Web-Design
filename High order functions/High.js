const produtos = [
  {
    id: 1,
    nome: "Smartphone Quantum X5",
    categoria: "Eletrônicos",
    preco: 4599.0,
    estoque: 15,
    marca: "TechCorp",
    em_promocao: false,
  },
  {
    id: 2,
    nome: "Cadeira Ergonômica Pro-Flow",
    categoria: "Móveis",
    preco: 1250.5,
    estoque: 8,
    marca: "ComfortHome",
    em_promocao: true,
  },
  {
    id: 3,
    nome: "Monitor OLED 32' 240Hz",
    categoria: "Informática",
    preco: 3800.0,
    estoque: 5,
    marca: "VisionMax",
    em_promocao: false,
  },
  {
    id: 4,
    nome: "Teclado Mecânico RGB",
    categoria: "Periféricos",
    preco: 450.0,
    estoque: 22,
    marca: "KeyMaster",
    em_promocao: true,
  },
  {
    id: 5,
    nome: "Smartwatch LifeTrack v4",
    categoria: "Wearables",
    preco: 899.9,
    estoque: 30,
    marca: "BioFit",
    em_promocao: false,
  },
  {
    id: 6,
    nome: "Fone de Ouvido Noise Cancelling",
    categoria: "Áudio",
    preco: 1100.0,
    estoque: 12,
    marca: "SoundPure",
    em_promocao: false,
  },
  {
    id: 7,
    nome: "Cafeteira Expresso Automática",
    categoria: "Eletrodomésticos",
    preco: 2300.0,
    estoque: 7,
    marca: "BaristaPro",
    em_promocao: true,
  },
  {
    id: 8,
    nome: "Mochila Impermeável Nomad",
    categoria: "Acessórios",
    preco: 320.0,
    estoque: 45,
    marca: "AdventureGear",
    em_promocao: false,
  },
  {
    id: 9,
    nome: "Luminária Inteligente Wi-Fi",
    categoria: "Casa Inteligente",
    preco: 180.0,
    estoque: 60,
    marca: "Lumina",
    em_promocao: true,
  },
  {
    id: 10,
    nome: "HD Externo 4TB Robusto",
    categoria: "Armazenamento",
    preco: 750.0,
    estoque: 18,
    marca: "DataSafe",
    em_promocao: false,
  },
  {
    id: 11,
    nome: "Mouse Gamer Wireless",
    categoria: "Periféricos",
    preco: 299.0,
    estoque: 25,
    marca: "SwiftClick",
    em_promocao: false,
  },
  {
    id: 12,
    nome: "Kindle Oasis 2026",
    categoria: "Eletrônicos",
    preco: 1400.0,
    estoque: 10,
    marca: "Amazon",
    em_promocao: false,
  },
  {
    id: 13,
    nome: "Bicicleta Elétrica CityE",
    categoria: "Esporte",
    preco: 7800.0,
    estoque: 3,
    marca: "EcoRide",
    em_promocao: true,
  },
  {
    id: 14,
    nome: "Câmera Mirrorless 4K",
    categoria: "Fotografia",
    preco: 5600.0,
    estoque: 6,
    marca: "OpticLens",
    em_promocao: false,
  },
  {
    id: 15,
    nome: "Suporte Articulado para Monitor",
    categoria: "Escritório",
    preco: 220.0,
    estoque: 40,
    marca: "FlexDesk",
    em_promocao: false,
  },
  {
    id: 16,
    nome: "Carregador Portátil 20.000 mAh",
    categoria: "Acessórios",
    preco: 280.0,
    estoque: 55,
    marca: "PowerUp",
    em_promocao: true,
  },
  {
    id: 17,
    nome: "Roteador Mesh Wi-Fi 7",
    categoria: "Redes",
    preco: 1950.0,
    estoque: 9,
    marca: "NetSpeed",
    em_promocao: false,
  },
  {
    id: 18,
    nome: "Drone Explorer Neo",
    categoria: "Hobbies",
    preco: 3100.0,
    estoque: 4,
    marca: "SkyFly",
    em_promocao: true,
  },
  {
    id: 19,
    nome: "Microfone Condensador USB",
    categoria: "Áudio",
    preco: 680.0,
    estoque: 14,
    marca: "VocalStream",
    em_promocao: false,
  },
  {
    id: 20,
    nome: "Webcam 4K Ultra HD",
    categoria: "Periféricos",
    preco: 540.0,
    estoque: 21,
    marca: "ClearView",
    em_promocao: false,
  }];
  
  // Exemplo de função de alta ordem: Filtrar produtos em promoção e mapear para obter nomes e preços com desconto
  // imprima o nome de todos os produtos seguidos do preço

// for(let i = 0; i < produtos.length; i++) {
//     console.log(`${produtos[i].nome} R$${produtos[i].preco}` )
// }

//forEach
// produtos.forEach((item) => console.log(`${item.nome} R$${item.preco}`));

// liste todos os produtos que estao em promocao

// const produtosEmPromocao = []

// for(let i = 0; i < produtos.length; i++) {
//    if(produtos[i].em_promocao){
//     produtosEmPromocao.push(produtos[i])
//    }
// }

// console.log(produtosEmPromocao)

//FILTER

// const produtosEmPromocao = produtos.filter(
//   (item) => item.em_promocao === true
// );

// console.log(produtosEmPromocao.length);

// dado o array de objetos, enconte o primeiro elemeneto em promocao

//find

// const produtosEmPromocao = produtos.find(
//   (item) => item.em_promocao === true
// );

// console.log(produtosEmPromocao)

//some

// const produtosEmPromocao = produtos.some(
//   (item) => item.em_promocao === true
// );

// console.log(produtosEmPromocao)

//every

// const produtosEmPromocao = produtos
//   .every((item) => item.em_promocao === true);

// console.log(produtosEmPromocao);

// ORDENEM O ARRAY PELO PRECO, DO MENOR PARA O MAIOR PRECO

// const produtoOrdenado = [...produtos].sort((a,b) => b.id - a.id)
// // console.log(produtoOrdenado)

// console.log(produtoOrdenado)

// ATIVIDADE EM SALA------------------------------------------------------------------------------------

//1.Criar um novo array com os produtos em promoção
// const NovoArray = [...produtos].filter((item) => item.em_promocao === true)
// console.log(NovoArray)

// 2.  foreach- Imprime no console uma frase para cada produto listado.
// const UmaFrase = [...produtos].forEach((item) => console.log('Uma frase para o ', item.nome));
// console.log(UmaFrase)--> o foreach nao retorna nada

//3. find- Encontra o primeiro produto que pertence à marca "Amazon".
// const DaAmazon = [...produtos].find((item) => item.marca === "Amazon");
// console.log(DaAmazon)

//4. some- Verifica se existe pelo menos um produto com estoque zerado (retorna true ou false)
// const TemMasTaFaltando = [...produtos].some((item) => item.estoque === 0);
// console.log(TemMasTaFaltando)

// 5 every-Verifica se todos os produtos da lista custam mais de R$ 50,00.
// const TodoMundoCaro = [...produtos].every((item) => item.preco > 50);
// if (TodoMundoCaro) {
//     console.log("Faz o L.")
// };

// 6 sort- Ordena o array do produto mais barato para o mais caro (ordem crescente de preço).
// Nota: O sort altera o array original.
// const eSoPiora = [...produtos].sort((a,b) => a.preco - b.preco);
// console.log(eSoPiora)