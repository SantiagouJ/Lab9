document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".enviar1").addEventListener("click", function() {
        enviarMensaje("user1");
    });

    document.querySelector(".enviar2").addEventListener("click", function() {
        enviarMensaje("user2");
    });
});

function enviarMensaje(usuario) {
    var inputMensaje = document.querySelector("#" + usuario + " .msguser").value.trim();
    if (inputMensaje !== "") {
        var mensajesContainer = document.getElementById("mensajes");
        var mensajeHTML = '<div class="message ' + usuario + '">' + inputMensaje + '</div>';
        mensajesContainer.innerHTML += mensajeHTML;
        document.querySelector("#" + usuario + " .msguser").value = "";
        mensajesContainer.scrollTop = mensajesContainer.scrollHeight;

        if (usuario === "user1") {
            mensajesContainer.lastChild.classList.add("user1-message");
        }
        if (usuario === "user2") {
            mensajesContainer.lastChild.classList.add("user2-message");
        }
    }
}
