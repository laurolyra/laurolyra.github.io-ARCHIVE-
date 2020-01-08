let informaCliques = 0;
const clickCount = document.getElementById('contaclique');
const informaBotao = document.getElementById('informa-botao');

clickCount.addEventListener('click', function () {
  informaCliques = informaCliques +1
  textoClique = document.createElement('div');
  textoClique.setAttribute ('id', 'numerocliques');
  textoClique.innerHTML = `O botão foi clicado ${informaCliques} vezes.`;
  informaBotao.appendChild(textoClique);
  if (informaBotao.childElementCount = 1) {
    informaBotao.removeChild(informaBotao.childNodes[0]);
  }
})
