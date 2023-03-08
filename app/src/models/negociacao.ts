import { Imprimivel } from "../interfaces/imprimivel.js";
import { Comparavel } from "../interfaces/comparavel.js";

export class Negociacao implements Imprimivel, Comparavel<Negociacao> {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    public static criaDe(
        dataString: string,
        quantidadeString: string,
        valorString: string
    ): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public paraTexto(): string {
        return `
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor}
        `;
    }

    public ehIgual(objeto: Negociacao): boolean {
        return (
            this.quantidade === objeto.quantidade && this.valor === objeto.valor
        );
    }
}
