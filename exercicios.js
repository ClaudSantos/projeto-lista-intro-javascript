// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
  // implemente sua lógica aqui
 const alturaUsuario = prompt('Digite aqui uma altura')
 const larguraUsuario = prompt('Digite aqui uma largura')
 const area = alturaUsuario * larguraUsuario
 console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade(ano, nascimento) {
  // implemente sua lógica aqui
  const anoAtual = prompt('Qual o ano atual?')
  const nascimentoUsuario = prompt('Qual o ano de seu nascimento?')
  const idadadeUsuario = anoAtual - nascimentoUsuario
  console.log(idadadeUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return (peso/(altura*altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome,idade,email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nomeUsuario = prompt('Qual seu nome?')
const idadeUsuario = prompt('Qual tua idade?')
const emailUsuario = prompt('Qual seu email?')
console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
  // implemente sua lógica aqui
  const cor1Usuario = prompt('Cor favorita 1')
  const cor2Usuario = prompt('Cor favorita 2')
  const cor3Usuario = prompt('Cor favorita 3')
  const coresFavoritas = [cor1Usuario,cor2Usuario,cor3Usuario]
  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
 const qtdIngresso = (custo/valorIngresso)

 return qtdIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const novoArray = array.slice() 
  const ultimoItem = novoArray.pop() 
  const primeiroItem = novoArray.shift()  
  novoArray.unshift(ultimoItem) 
  novoArray.push(primeiroItem) 

  return novoArray 
}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()



}

// EXERCÍCIO 13
function checaRenovacaoRG(ano,carteira,nascimento) {
  // implemente sua lógica aqui
  const anoAtual = prompt('Que ano estamos')
  const nascimentoUsuario2 = prompt('Qual o seu ano de nascimento?')
  const carteiraUsuario = prompt('Qual ano você fez seu RG')
  const idade = anoAtual - nascimentoUsuario2
  const tempoDeRG = anoAtual - carteiraUsuario 
  const precisaTrocar = ((idade <= 20) && (tempoDeRG >= 5)) || (((idade > 20 && idade <= 50)) && (tempoDeRG >= 10)) || ((idade > 50) && (tempoDeRG >= 15)) 
  console.log(precisaTrocar)
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoBissexto = (ano % 400 === 0) || (ano % 4 === 0) !==  (ano % 100 === 0 && !(ano % 400 == 0))
  return anoBissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(idade,escolaridade,disponibilidade) {
  // implemente sua lógica aqui
  const idadeUsuario2 = prompt('Você é de maior?')
  const escolaridadeUsuario = prompt('Você tem ensino médio completo?')
  const disponibilidadeUsuario = prompt ('Você tem disponibilidade exclusiva durante o curso?')
 
  const temIdade = (idadeUsuario2 === 'sim')
  const temEscolaridade = (escolaridadeUsuario === 'sim')
  const temDisponibilidade = (disponibilidadeUsuario === 'sim')
  const podeEstudar = temIdade && temEscolaridade && temDisponibilidade
  console.log(podeEstudar)


}

//d