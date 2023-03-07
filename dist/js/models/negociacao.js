export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return new Date(this._data);
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const data = new Date(dataString.replace(/-/g, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}
