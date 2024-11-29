function agregar() {
    const input = document.getElementById("name").value;
    const año = document.getElementById("año").value;
    const tipo = document.getElementById("tipo").value;
    const no = document.getElementById("no").checked;
    const peligro = document.getElementById("peligro").checked;
    const select2 = document.getElementById("selecionate2");
    const select = document.getElementById("selecionate");

    if (!input || !año || !tipo) {
        alert("Por favor, rellena todos los campos.");
        return;
    }

    const option = document.createElement("option");
    option.text = input;

    if (no) {
        select2.add(option);
    }

    if (peligro) {
        select.add(option.cloneNode(true));
    }
}

function quitar() {
    const select = document.getElementById("selecionate");
    const select2 = document.getElementById("selecionate2");

    select.remove(select.selectedIndex);
    select2.remove(select2.selectedIndex);
}

function limpiar() {
    document.getElementById("selecionate").innerHTML = '';
    document.getElementById("selecionate2").innerHTML = '';
}

function intercambiar(valor) {
    let selectir, selectvenir;

    if (valor === 1) {
        selectir = document.getElementById("selecionate");
        selectvenir = document.getElementById("selecionate2");
        alert("Regreso al otro lado");
    } else if (valor === 2) {
        selectir = document.getElementById("selecionate2");
        selectvenir = document.getElementById("selecionate");
        alert("Enviado al otro lado");
    } else {
        return;
    }

    const creoelegido = Array.from(selectir.selectedOptions);
    creoelegido.forEach(function(option) {
        selectvenir.appendChild(option);
    });
}

function activarPeligro() {
    document.getElementById("no").checked = false;
}

function activarLetal() {
    document.getElementById("peligro").checked = false;
}
