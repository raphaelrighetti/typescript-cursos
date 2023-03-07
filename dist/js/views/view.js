export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        this.elemento.innerHTML = this.template(model)
            .replace(/<script>[\s\S]*?<\/script>/g, "");
    }
}
