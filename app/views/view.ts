export abstract class View<T> {

    private elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);

        if (elemento) {
            this.elemento = document.querySelector(seletor) as HTMLElement;
        } else {
            throw new Error(`Seletor ${seletor} não existe no arquivo HTML, por favor verifique.`);
        }
        
    }

    protected abstract template(model: T): string;

    update(model: T): void {
        this.elemento.innerHTML = this.template(model)
        .replace(/<script>[\s\S]*?<\/script>/g, "");
    }
}