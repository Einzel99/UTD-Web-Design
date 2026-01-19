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
//   const estoqueAtualizado = produtos.map((produto) => {
//      const {estoque} = produto;
//     return {
//         ...produto,
//         estoque : estoque + 5,
//     };
//   });

  //MAP


const carrinho = [
  { nome: 'Teclado Mecânico', preco: 250, quantidade: 2 },
  { nome: 'Monitor 24"', preco: 900, quantidade: 1 },
  { nome: 'Mouse Gamer', preco: 150, quantidade: 3 },
  { nome: 'Headset USB', preco: 300, quantidade: 2 }
];

// // Você recebeu um array de objetos representando produtos em um carrinho de compras.
//  Sua tarefa é criar um novo array de objetos que contenha apenas o nome do produto e o preço total
//  (quantidade vezes o preço unitário).

// const compra = carrinho.map((item) => {
//     return {
//         nome: item.nome,
//         precoTotal: item.preco * item.quantidade,
//     };
// })
//  console.log(compra);

// REDUCE
// Utilizando o mesmo array de produtos do exercício anterior,
// seu objetivo agora é calcular o valor total bruto 
// de toda a compra e a quantidade total de itens no carrinho.

const ValorFinal = carrinho.reduce((acc, item) => {
    acc.totalPreco += item.preco * item.quantidade;
    acc.totalQuantidade += item.quantidade;
    return acc;
}, {
  totalPreco: 0,

  totalQuantidade: 0,
});

console.log(ValorFinal);