let informaCliques = 0;
const clickCount = document.getElementById('contaclique');
const informaBotao = document.getElementById('informa-botao');

clickCount.addEventListener('click', function () {
  informaCliques = informaCliques +1
  textoClique = document.createElement('div');
  textoClique.setAttribute ('id', 'numerocliques');
  if(informaCliques == 1) {
    textoClique.innerHTML = `O botão foi clicado ${informaCliques} vez.`;
  } else {
  textoClique.innerHTML = `O botão foi clicado ${informaCliques} vezes.`;}
  informaBotao.removeChild(informaBotao.childNodes[0]);
  informaBotao.appendChild(textoClique);
})
