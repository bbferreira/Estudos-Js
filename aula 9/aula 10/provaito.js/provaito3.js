function ConsumoTabela() {
    const array = [];
    let numero = 0;
  
    do {
      const numeroAleatorio =  parseInt(Math.random() * 100) + 1;
      array.push(numeroAleatorio);
      numero++;
    } while (numero < 10);
  
    return array;
  }
  
  
  const tabelaConsumo = [];
  
  for (let ano = 2010; ano <= 2019; ano++) {
    const consumoAnual = [];
  
    for (let mes = 0; mes < 12; mes++) {
      const array = ConsumoTabela();
      consumoAnual.push(array);
    }
  
    tabelaConsumo.push(consumoAnual);
  }
  
  let maiorGasto = 0;
  let mesMaiorGasto = 0;
  let anoMaiorGasto = 0;
  const consumoMedioMensal = [];
  
  for (let ano = 0; ano < tabelaConsumo.length; ano++) {
    for (let mes = 0; mes < tabelaConsumo[ano].length; mes++) {
      const consumoMes = tabelaConsumo[ano][mes];
      let somaConsumoMes = 0;
  
      for (let i = 0; i < consumoMes.length; i++) {
        somaConsumoMes += consumoMes[i];
      }
  
      const consumoMedio = somaConsumoMes / consumoMes.length;
      consumoMedioMensal.push(consumoMedio);
  
      if (consumoMedio > maiorGasto) {
        maiorGasto = consumoMedio;
        mesMaiorGasto = mes;
        anoMaiorGasto = ano;
      }
    }
  }
  
  const mesesDoAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const anoMaisGastou = 2010 + anoMaiorGasto;
  
  console.log("Consumo médio mensal:");
  
  for (let mes = 0; mes < consumoMedioMensal.length; mes++) {
    const consumoMedio = consumoMedioMensal[mes];
    const mesDoAno = mesesDoAno[mes % 12];
    const ano = 2010 + parseInt(mes / 12);
  
    console.log(`Mês ${mesDoAno} de ${ano}: Consumo médio = ${consumoMedio}`);
  }
  
  console.log(`O mês e ano que mais gastou energia nos últimos 10 anos foi: ${mesesDoAno[mesMaiorGasto]} de ${anoMaisGastou}.`);
  