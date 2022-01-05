function verificaPalindromo() {
    
    const div = document.querySelector(".container");
    div.innerHTML = "";

    var palindromo = document.getElementById('campopalindromo').value;
    var palindromoTransformado1;
    var palindromoTransformado2;

    palindromoTransformado1 = palindromo.replace(/\s+/g, '').split("").join("");
    palindromoTransformado2 = palindromo.split("").reverse().join("").replace(/\s+/g, '');

    if (palindromoTransformado1 == palindromoTransformado2) {
        function addP() {
            novoTexto = document.createTextNode(`A frase/palavra que você inseriu é um palíndromo - ${palindromoTransformado1} e ${palindromoTransformado2}.`);
            resultadopalindromo.appendChild(novoTexto);
            document.getElementById('campopalindromo').value = "";
        };
        addP();
    } else {
        function addP2() {
            novoTexto2 = document.createTextNode(`A frase/palavra que você inseriu não é um palíndromo - ${palindromoTransformado1} e ${palindromoTransformado2}.`);
            resultadopalindromo.appendChild(novoTexto2);
            document.getElementById('campopalindromo').value = "";
        };
        addP2();
    };   
};

function substituiNumerosPares(array) {
	if (!array.length) return alert(-1);

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			alert(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!naoZero(array[i])) {
			alert('Ops, você já vale 0!');
		}
	}
	alert(array);
}