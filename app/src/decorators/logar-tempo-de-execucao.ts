export function logarTempoDeExecucao() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal: Function = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const tempo1 = performance.now();
            metodoOriginal.apply(this, args);
            const tempo2 = performance.now();
            console.log(
                `Tempo de execução do método "${propertyKey}" (em segundos): ${
                    (tempo2 - tempo1) / 1000
                }`
            );
        };

        return descriptor;
    };
}
