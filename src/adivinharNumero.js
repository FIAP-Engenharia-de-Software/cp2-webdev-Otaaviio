// ## Jogo de Adivinhação (1 ponto)

// **Enunciado:**

// Implemente a função adivinharNumero, que receba um número máximo e um palpite. A função deve gerar um número aleatório entre 0 e `max`. A função deve:

// - Retornar `"Acertou!"` se o número gerado for igual ao `palpite`;
// - Retornar `"Errou! Tente novamente!"` se o palpite estiver incorreto.

function adivinharNumero(max, palpite) {
  let maximo = ((Math.random) * max)
  if (palpite == maximo) {
    return "Errou! Tente novamente!"
  }
  else if (palpite != maximo) {
    return "Acertou!"
  }
}


// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { adivinharNumero };