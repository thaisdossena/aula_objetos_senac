        // Exercícios de interpretação de código

        // 1.Leia o código abaixo

    // const filme = {
    // 	nome: "Auto da Compadecida", 
    // 	ano: 2000, 
    // 	elenco: [
    // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    // 		"Virginia Cavendish"
    // 		], 
    // 	transmissoesHoje: [
    // 		{canal: "Telecine", horario: "21h"}, 
    // 		{canal: "Canal Brasil", horario: "19h"}, 
    // 		{canal: "Globo", horario: "14h"}
    // 		]
    // }

    // console.log(filme.elenco[0])//Matheus Nachtergaele
    // console.log(filme.elenco[filme.elenco.length - 1])//Virginia Cavendish
    // console.log(filme.transmissoesHoje[2])//Globo

        // 2.Leia o código abaixo:

    // const cachorro = {
    // 	nome: "Juca", 
    // 	idade: 3, 
    // 	raca: "SRD"
    // }

    // const gato = {...cachorro, nome: "Juba"}

    // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

    // console.log(cachorro)//Juca, 3, SRD
    // console.log(gato)//Juba, 3, SRD
    // console.log(tartaruga)//Jubo, 3, SRD

        // 3.Leia o código abaixo:3

    // function minhaFuncao(objeto, propriedade) {
    //     return objeto[propriedade]
    // }

    // const pessoa = {
    //     nome: "Caio", 
    //     idade: 23, 
    //     backender: false
    // }

    // console.log(minhaFuncao(pessoa, "backender"))//false
    // console.log(minhaFuncao(pessoa, "altura"))//undefined

        //Exercícios de interpretação de código

        // 1. Resolva os passos a seguir: 
        
    // a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:
    // b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto


const pessoa = {
    nome: "Thaís",
    apelidos: ["Tata"," Caca"," Dossena"],
}

function cadastroPessoa(pessoa) {
    console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
}

cadastroPessoa(pessoa)

const pessoa2 = {
    ...pessoa,
    apelidos:["Risadinha"," Docinho"," Thaixxx"],
}

function cadastroPessoa2(pessoa2) {
    console.log (`Eu sou ${pessoa2.nome}, mas pode me chamar de: ${pessoa2.apelidos}`)
}

cadastroPessoa2(pessoa2)

        // 2.Resolva os passos a seguir: 
        
    //     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.         
    //     b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:        
    //     1. O valor de `nome`
    //     2. O numero de caracteres do valor `nome`
    //     3. O valor de `idade`
    //     4. O valor de `profissão`
    //     5. O numero de caracteres do valor `profissão`

const pessoa = {
    nome: "Bruno", 
    idade: 23, 
    profissao: "Instrutor"
}

const pessoa2 = {
    nome: "Jéssica", 
    idade: 34, 
    profissao: "Analísta"
}

function revelarPessoa(pessoa) {
    const nomePessoa = pessoa.nome
    const numCaracteres = pessoa.nome.length
    const idadePessoa = pessoa.idade
    const profissaoPessoa = pessoa.profissao
    const numProfissao = pessoa.profissao.length

    return [nomePessoa, numCaracteres, idadePessoa, profissaoPessoa, numProfissao]
}

revelarPessoa(pessoa)
revelarPessoa(pessoa2)

console.log(revelarPessoa(pessoa))

        // 3. Resolva os passos a seguir: 

        // a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`    
        // b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)    
        // c) Crie uma função que **receba** um objeto fruta por parâmetro e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.
        // d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

    
let carrinho = [];

let fruta1 = { nome: 'Maçã', disponibilidade: true };
let fruta2 = { nome: 'Banana', disponibilidade: true };
let fruta3 = { nome: 'Laranja', disponibilidade: true };

function adicionarAoCarrinho(fruta) {
  carrinho.push(fruta);
}

adicionarAoCarrinho(fruta1);
adicionarAoCarrinho(fruta2);
adicionarAoCarrinho(fruta3);

console.log(carrinho);

        //Desafios

        // 1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

function criarObjeto() {
    var nome = prompt("Qual é o seu nome?");
    var idade = prompt("Qual é a sua idade?");
    var profissao = prompt("Qual é a sua profissão?");

    var objeto = {
        nome: nome,
        idade: idade,
        profissao: profissao
    };

    console.log(objeto);
    console.log(typeof objeto);
    }

    criarObjeto();          

        // 2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome.
        
const filme1 = {
    nome: "Moana",
    anoLancamento: 2016
    };
    
    const filme2 = {
    nome: "Encanto",
    anoLancamento: 2021
    };

function compararFilmes(filme1, filme2) {
    if (filme1.anoLancamento < filme2.anoLancamento) {
        return `O segundo filme foi lançado depois do primeiro.`;
    } else if (filme1.anoLancamento === filme2.anoLancamento) {
        return `Os dois filmes foram lançados no mesmo ano`;
    } else {
        return `O primeiro filme foi lançado depois do segundo.`;
    }
    }                          
    
    const mensagem = compararFilmes(filme1, filme2);
    console.log(mensagem);
          

        // 3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido. 

function inverterDisponibilidade(fruta) {
    fruta.disponibilidade = !fruta.disponibilidade;
    return fruta;
    }
    
    const fruta = {
    nome: "Banana",
    disponibilidade: true
    };
    
    const frutaInvertida = inverterDisponibilidade(fruta);
    console.log(frutaInvertida);
    