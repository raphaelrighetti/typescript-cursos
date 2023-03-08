export function inspecionar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal: Function = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`--- Método: ${propertyKey}`);
        console.log(`------ Parâmetro(s): ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ Retorno: ${retorno}`);
    };

    return descriptor;
}
