// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

// Resposta: O valor da variável SOMA é 91.

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci
// e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const fibonacci = (num = 21) => {
  let a = 0,
    b = 1,
    temp;

  while (b <= num) {
    if (b === num) {
      return `${num} pertence à sequência de Fibonacci.`;
    }

    temp = a;
    a = b;
    b = temp + b;
  }

  return `${num} não pertence à sequência de Fibonacci.`;
};

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamentoDiario = async () => {
  const dados = require("./dados.json");

  const soma = dados.reduce((a, b) => a + b.valor, 0);
  const diasComFaturamento = dados.filter((dia) => dia.valor > 0);
  const valoresComFaturamentoOrdernados = diasComFaturamento.sort(
    (a, b) => a.valor - b.valor
  );

  const menorValor = valoresComFaturamentoOrdernados[0];

  const maiorValor =
    valoresComFaturamentoOrdernados[valoresComFaturamentoOrdernados.length - 1];

  const media = soma / diasComFaturamento.length;

  let QntDiasAcimaDaMedia = 0;

  for (let i = 0; i < diasComFaturamento.length; i++) {
    if (diasComFaturamento[i].valor > media) {
      QntDiasAcimaDaMedia++;
    }
  }

  return {
    menorValor: menorValor.valor,
    maiorValor: maiorValor.valor,
    QntDiasAcimaDaMedia,
  };
};

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const percentual = () => {
  const faturamento = [
    { estado: "SP", faturamento: 67836.43 },
    { estado: "RJ", faturamento: 36678.66 },
    { estado: "MG", faturamento: 29229.88 },
    { estado: "ES", faturamento: 27165.48 },
    { estado: "outros", faturamento: 19849.53 },
  ];

  const total = faturamento.reduce((a, b) => a + b.faturamento, 0);

  const percentuais = [];

  for (let i = 0; i < faturamento.length; i++) {
    const porcentagemFaturamento = (faturamento[i].faturamento / total) * 100;

    percentuais.push({
      estado: faturamento[i].estado,
      porcentagem: Number(porcentagemFaturamento.toFixed(2)),
    });
  }

  return percentuais;
};

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const inverterString = (text = "targetsistemas") => {
  const arrString = text.split("");
  let stringInvertida = "";

  for (let i = arrString.length - 1; i >= 0; i--) {
    stringInvertida += arrString[i];
  }

  return stringInvertida;
};
