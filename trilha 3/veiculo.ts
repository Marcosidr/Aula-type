class Veiculo {
    mover(): void {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo {
    mover(): void {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    mover(): void {
        console.log("A bicicleta está pedalando");
    }
}

console.log("=== EXERCÍCIO 1: VEÍCULOS ===\n");

const meuCarro = new Carro();
const minhaBike = new Bicicleta();
const veiculo = new Veiculo();

veiculo.mover();
meuCarro.mover();
minhaBike.mover();
