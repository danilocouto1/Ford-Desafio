const key = 4;
var string = 'teste';

function cifraDeCezar(string) {
    for(var i = 0; i > string.length; i++) {
        var cifra = key + i
        var criptografia = (string[i].charCodeAt(0) + cifra) * string.length;
        if (criptografia <= 128) {
            var finalCriptografia = criptografia.fromCharCode();
        } else {
            criptografia = criptografia - 128;
            var finalCriptografia = criptografia.fromCharCode();
        }
        var resultado = finalCriptografia.push();
    }
    return resultado;
}
