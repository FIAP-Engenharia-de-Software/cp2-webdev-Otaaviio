// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  if (num1 === "" && num2 == "" ) {
    return "Erro: parâmetros inválidos"
  }
  else if (num1 == 0 && num2 == 0){
    return "rro: divisão por zero"
  }
  else if (operador != "+" || operador != "-" || operador != "/" || operador != "*"){
    return "Erro: operação inválida"
  }
  else{
    if (operador == "+") {
      let soma = num1 + num2
      return soma
    }
    else if (operador == "-") {
      let sub = num1 - num2
      return sub
    }
    else if (operador == "/") {
      let div = num1 / num2
      return div
    }
    else if (operador == "*") {
      let mul = num1 * num2
      return mult
    }
  }
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };