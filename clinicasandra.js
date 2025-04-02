document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".form form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let nome = document.querySelector("input[type='text']").value.trim();
        let telefone = document.querySelector("input[type='tel']").value.trim();
        let data = document.querySelector("input[type='date']").value.trim();
        let servico = document.querySelector("select").value;
        
        if (nome === "" || telefone === "" || data === "" || servico === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        
        alert("Consulta marcada com sucesso! Entraremos em contato para confirmação.");
        event.target.reset();
    });
});