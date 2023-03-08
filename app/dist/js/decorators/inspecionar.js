export function inspecionar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Método: ${propertyKey}`);
        console.log(`------ Parâmetro(s): ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ Retorno: ${retorno}`);
    };
    return descriptor;
}
//# sourceMappingURL=inspecionar.js.map