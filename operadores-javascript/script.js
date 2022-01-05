function comparador() {
    let n1 = Number(prompt("Insira o primeiro número:"));
    let n2 = Number(prompt("Insira o segundo número"));
    let somaNumeros;

    if (!n1 || !n2) {
        alert("Erro - Parâmetros inválidos. Tente novamente!")
        comparador()
        
    } else {

        function soma() {
            somaNumeros = n1 + n2;
            if (n1 == n2 && somaNumeros > 10 && somaNumeros < 20) {
                alert(`Os números ${n1} e ${n2} são iguais; Sua soma é ${somaNumeros}, que é maior que 10 e menor que 20.`)
            } else if (n1 == n2 && somaNumeros > 10 && somaNumeros > 20) {
                alert(`Os números ${n1} e ${n2} são iguais; Sua soma é ${somaNumeros}, que é maior que 10 e maior que 20.`)
            } else if (n1 == n2 && somaNumeros < 10 && somaNumeros > 20) {
                alert(`Os números ${n1} e ${n2} são iguais; Sua soma é ${somaNumeros}, que é menor que 10 e maior que 20.`)
            } else if (n1 == n2 && somaNumeros < 10 && somaNumeros < 20) {
                alert(`Os números ${n1} e ${n2} são iguais; Sua soma é ${somaNumeros}, que é menor que 10 e menor que 20.`)
            } else if (n1 !== n2 && somaNumeros > 10 && somaNumeros < 20) {
                alert(`Os números ${n1} e ${n2} são diferentes; Sua soma é ${somaNumeros}, que é maior que 10 e menor que 20.`)
            } else if (n1 !== n2 && somaNumeros > 10 && somaNumeros > 20) {
                alert(`Os números ${n1} e ${n2} são diferentes; Sua soma é ${somaNumeros}, que é maior que 10 e maior que 20.`)
            } else if (n1 !== n2 && somaNumeros < 10 && somaNumeros > 20) {
                alert(`Os números ${n1} e ${n2} são diferentes; Sua soma é ${somaNumeros}, que é menor que 10 e maior que 20.`)
            } else if (n1 !== n2 && somaNumeros < 10 && somaNumeros < 20) {
                alert(`Os números ${n1} e ${n2} são diferentes; Sua soma é ${somaNumeros}, que é menor que 10 e menor que 20.`)
            } else {
                alert("A soma dos números é igual a 10 ou a 20.");
            };
        };

        soma();

    };
};