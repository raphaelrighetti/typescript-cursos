export class Negociacao {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    get data(): Date {
        return new Date(this._data);
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const data: Date = new Date(dataString.replace(/-/g, ","));
        const quantidade: number = parseInt(quantidadeString);
        const valor: number = parseFloat(valorString)

        return new Negociacao(data, quantidade, valor);
    }
}


