export abstract class View<T> {

    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(model: T): string;

    update(model: T): void {
        this.elemento.innerHTML = this.template(model)
        .replace(/<script>[\s\S]*?<\/script>/g, "");
    }
}