let selecionaEstados = document.querySelector('#seleciona-estado');

let enviarDados = document.querySelector('#botao-envia');

let dataEntrada = document.querySelector('.data-entrada');

document.querySelector('body').onload = geraEstados();

//gera lista de estados
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

//usa biblioteca pra ler o formato de data
dataEntrada.addEventListener ('click', function(){
    dataEntrada.DatePickerX.init({format: 'dd/mm/yyyy'});
})

// //verifica se o formato de data está correto
// enviarDados.addEventListener ('click', function() {
//     let formatoValido = document.querySelector('.data-entrada').value;
//     contaBarras = 0;
// 	for(let i = 0; i < formatoValido.length; i++){
//         if(formatoValido.charAt(i) === '/'){
//             contaBarras++;
//         }
//     }
//     console.log(contaBarras);
//     if (contaBarras!=2){
//     	alert ('formato de data inválido.')
//     } else {
//     	let data = document.querySelector('.data-entrada').value.split('/');
//     	//verifica dia
//     	if (data[0] < 0 || data[0] > 31){
//     		alert ('formato de dia inválido')
//     	}
//     	//verifica mês
//     	if (data[1].length < 2 || data[1] > 12){
//     		alert ('formato de mês inválido')
//     	}
//     	//verifica ano
//     	if (data[2] < 0 || data[2].length < 4){
//     		alert('formato de ano inválido');
//     	}
//     }})

//função pra prevenir o comportamento padrão do botão
enviarDados.addEventListener("click", function(event){
  event.preventDefault()
})
