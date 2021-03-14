function showLength() {
    let text = document.getElementsByName("anyText")[0].value;

    return alert(`O texto inserido tem: ${text.length} caracteres`);
}