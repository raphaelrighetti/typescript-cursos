import { NegociacaoDadosAPI } from "../interfaces/negociacao-dados-API.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    public obterDadosNegociacoesAPI(): Promise<Negociacao[]> {
        return fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((dados: NegociacaoDadosAPI[]) => {
                return dados.map(dado => {
                    return new Negociacao(
                        new Date(),
                        dado.vezes,
                        dado.montante
                    );
                });
            });
    }
}
