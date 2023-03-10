import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { inspecionar } from "../decorators/inspecionar.js";
import { domInjector } from "../decorators/domInjector.js";
import { imprimir } from "../utils/imprimir.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    @domInjector("#data")
    private inputData: HTMLInputElement;

    @domInjector("#quantidade")
    private inputQuantidade: HTMLInputElement;

    @domInjector("#valor")
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    private negociacoesService = new NegociacoesService();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    public importaDados(): void {
        this.negociacoesService
            .obterDadosNegociacoesAPI()
            .then(arrayNegociacoes => {
                return arrayNegociacoes.filter(itemNegociacao => {
                    return !this.negociacoes
                        .lista()
                        .some(itemNegociacaoAComparar => {
                            return itemNegociacaoAComparar.ehIgual(
                                itemNegociacao
                            );
                        });
                });
            })
            .then(arrayNegociacoes => {
                for (const itemNegociacao of arrayNegociacoes) {
                    this.negociacoes.adiciona(itemNegociacao);
                    this.atualizaView();
                }
            })
            .catch(error => {
                throw error;
            });
    }

    @logarTempoDeExecucao()
    @inspecionar
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update(
                "Apenas negocia????es em dias ??teis s??o aceitas"
            );
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.limpaFormulario();
        this.atualizaView();

        imprimir(negociacao, this.negociacoes);
    }

    private ehDiaUtil(data: Date) {
        return (
            data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO
        );
    }

    private limpaFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negocia????o adicionada com sucesso");
    }
}
