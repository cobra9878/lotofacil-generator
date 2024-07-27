function gerarNumeros() {
    const numeros = [];
    while (numeros.length < 15) {
        const numero = Math.floor(Math.random() * 25) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
    numeros.sort((a, b) => a - b); // Ordenar os números em ordem crescente
    document.getElementById('resultados').innerText = 'Números gerados: ' + numeros.join(', ');
}
