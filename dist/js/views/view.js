export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = document.querySelector(seletor);
        }
        else {
            throw new Error(`Seletor ${seletor} não existe no arquivo HTML, por favor verifique.`);
        }
    }
    update(model) {
        this.elemento.innerHTML = this.template(model)
            .replace(/<script>[\s\S]*?<\/script>/g, "");
    }
}
