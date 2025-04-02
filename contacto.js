document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio real do formulário

        let nome = document.getElementById("nome").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        document.getElementById("contactForm").reset(); // Limpa o formulário após envio simulado
    });
});

function validateEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
