function sum() {
    let n1 = prompt("Informe um número");
    let n2 = prompt("informe outro número");

    return parseInt(n1) + parseInt(n2);
}

function getSum() {
    let result = sum();

    let message = document.getElementById("sumResult");

    return message.innerHTML = `O resultado da soma é: ${result}`;
}