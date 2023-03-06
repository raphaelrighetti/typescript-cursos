import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js"
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";

export class NegociacaoController {
    
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();

        negociacao.data.setDate(1);

        this.negociacoes.adiciona(negociacao);
        this.mensagemView.update("Negociação inserida com sucesso!");
        this.negociacoesView.update(this.negociacoes);
        
        this.limpaFormulario();
    }

    limpaFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "1";
        this.inputValor.value = "0.0";
        this.inputData.focus();
    }


    criaNegociacao(): Negociacao {
        const data: Date = new Date(this.inputData.value.replace(/-/g, ","));
        const quantidade: number = parseInt(this.inputQuantidade.value);
        const valor: number = parseFloat(this.inputValor.value)

        return new Negociacao(data, quantidade, valor);
    }
}