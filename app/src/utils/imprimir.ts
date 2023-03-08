import { Imprimivel } from "../interfaces/imprimivel";

export function imprimir(...objetos: Imprimivel[]): void {
    objetos.forEach(objeto => {
        console.log(objeto.paraTexto());
    });
}
