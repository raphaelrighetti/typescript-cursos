import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form") as HTMLFormElement;
const botaoImportar = document.querySelector(
    "#botao-importar"
) as HTMLButtonElement;

if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error(
        "Não foi possível inicializar a aplicação. Verifique se o form existe."
    );
}

if (botaoImportar) {
    botaoImportar.addEventListener("click", () => {
        controller.importaDados();
    });
} else {
    throw Error(
        "Não foi possível inicializar a aplicação. Verifique se o botão existe."
    );
}
