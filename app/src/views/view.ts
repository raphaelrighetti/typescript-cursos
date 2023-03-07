import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
    }

    protected abstract template(model: T): string;

    @logarTempoDeExecucao()
    public update(model: T): void {
        this.elemento.innerHTML = this.template(model).replace(
            /<script>[\s\S]*?<\/script>/,
            ""
        );
    }
}
