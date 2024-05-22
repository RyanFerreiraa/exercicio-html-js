document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const valorA = parseFloat(document.getElementById("conta").value);
    const valorB = parseFloat(document.getElementById("deposito").value);

    if (valorA < valorB) {
        alert("Depósito concluído");
    } else {
        alert("Depósito não concluído");
    }
});
