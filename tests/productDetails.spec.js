const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    let funcao = productDetails('arroz', 'feijão');
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(funcao)).toBeTruthy();
    expect(funcao.length).toBe(2);
    for (let index = 0; index < funcao.length; index +=1) {
      expect(typeof funcao[index]).toBe('object');
    }
    expect(funcao[0] !== funcao[1]).toBeTruthy();
    for (let index = 0; index < funcao.length; index +=1) {
      expect(funcao[index].details.productId).toEqual(expect.stringContaining('123'));
    }
  });
});