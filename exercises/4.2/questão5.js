let numero = 15;
let divisores = 0;
for (i=1;i<11;i++){
    if (numero%i == 0){
    divisores++;
}
}
if (divisores<2){
    console.log(numero+" é primo");
}
else{
    console.log(numero+" não é primo")
}