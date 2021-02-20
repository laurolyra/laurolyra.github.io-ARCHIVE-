function longestWord (string) {
  const divideString = string.split(' ');
  const quantPalavras = divideString.length;
  const numeros = []
  for (x=0; x < quantPalavras; x+=1){
    numeros[x] = divideString[x].length
  }
  const maiorPalavra = numeros.indexOf(Math.max(...numeros));
  return `a maior palavra desta string é "${divideString[maiorPalavra]}"`;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))
