export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = "milissegundos";
            if (emSegundos) {
                divisor = 1000;
                unidade = "segundos";
            }
            const tempo1 = performance.now();
            metodoOriginal.apply(this, args);
            const tempo2 = performance.now();
            console.log(`Tempo de execução do método "${propertyKey}" (em ${unidade}): ${(tempo2 - tempo1) / divisor}`);
        };
        return descriptor;
    };
}
