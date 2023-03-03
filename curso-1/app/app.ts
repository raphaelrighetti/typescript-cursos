import { NegociacaoController } from "./controllers/negociacaoController.js";

const negociacaoController: NegociacaoController = new NegociacaoController();

const form: HTMLFormElement = document.querySelector(".form");

form.addEventListener("submit", event => {
    event.preventDefault();

    negociacaoController.adiciona();
});
