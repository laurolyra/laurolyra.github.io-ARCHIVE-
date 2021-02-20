let n = 5;
let desenho ={
    espaco:"0",
    asterisco:"*"
}
if (n<=1){
    console.log("número inválido")
}
else{
    for (i=0;i<n;i++){
        console.log(desenho.espaco.repeat(n),desenho.asterisco.repeat(i+1));
    }
}