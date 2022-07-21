function calcularPreco(nomeProduto, preco){
   let custoEnvio = 0;

   if(preco >=1 && preco <= 2000){
      custoEnvio = 300
   }else if(preco >= 2001 && preco <= 4000){
      custoEnvio = 450
   }else if(preco > 4000){
      custoEnvio = 700
   }

   let precoFinal = preco + custoEnvio

   return `O produto ${nomeProduto} custa ${preco}. Seu custo de envio é ${custoEnvio}. Portanto, o preço final é ${precoFinal}`
}

console.log(calcularPreco('Macbook', 2500))
console.log(calcularPreco('Celular', 500))
console.log(calcularPreco('Playstation', 4500))