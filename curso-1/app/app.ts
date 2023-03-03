import { Negociacao } from "./models/Negociacao.js";

const minhaNegociacao = new Negociacao(Date.now(), 10, 1000);
console.log(
    minhaNegociacao.data,
    minhaNegociacao.quantidade,
    minhaNegociacao.valor
);
