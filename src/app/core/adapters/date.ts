export const converterData = (dataString: string): string => {

    const partesData = dataString.split('-');
  
    const data = new Date(Number(partesData[2]), Number(partesData[1]) - 1, Number(partesData[0]));

    const dataFormatada = data.toISOString();
  
    return dataFormatada;
  }