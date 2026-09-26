function cadotroo() {
    const nome = document.getElementById("nome").value;

    const email = document.getElementById("email").value;
    const usuario = nome + " (" + email + ")"

    document.getElementById("user").innerHTML = usuario;
}