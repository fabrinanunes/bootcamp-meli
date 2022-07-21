let array = [1, 2, 3, 4, 5]
let novoArray = [];

array.forEach((e) => novoArray.push(e * 2))

console.log(novoArray)

let jogador = {
   nome: 'Cristiano',
   apelido: 'Papai Chris',
   ativo: true,
   cumprimentar: function(){
      return `Olá, eu sou o Cristiano Ronaldo`
   },
   teste: {
      nome: 'Teste'
   }
}

const x = 'teste'

console.log(jogador.nome)
console.log(jogador['nome'])
console.log(jogador.teste.nome)
console.log(jogador.cumprimentar)
console.log(jogador.cumprimentar())
console.log(jogador['cumprimentar']())

// desestruturando objeto literais
let pessoa = {
   nome: `Laura`,
   idade: 31,
   faltas: 3
}

let { nome, faltas } = pessoa