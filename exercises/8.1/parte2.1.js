function fatorial (numero) {
    let contador = 1
    for (x=numero; x>1; x--) {
        contador = contador * x
    }
    return contador
}

console.log (fatorial (4))