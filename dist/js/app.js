import { NegociacaoController } from "./controllers/negociacaoController.js";
const negociacaoController = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        negociacaoController.adiciona();
    });
}
else {
    throw new Error("Não foi possível encontrar o formulário no arquivo HTML, verifique se ele existe.");
}
