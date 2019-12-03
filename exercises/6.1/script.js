let selecionaEstados = document.querySelector('#seleciona-estado');

document.querySelector('body').onload = geraEstados();

function geraEstados(){
	let estados = ['AC', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
	'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
	listaEstados = estados.length
	for (i=0; i < listaEstados;i++){
	    let opcao = document.createElement('option');
	    opcao.setAttribute ('value', estados[i]);
	    opcao.innerHTML = estados[i];
	    selecionaEstados.appendChild(opcao);
}
}