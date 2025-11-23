class Animal {
    private energia: number;

    constructor(energiaInicial: number) {
        this.energia = energiaInicial;
    }

    comer(): void {
        this.energia += 10;
        console.log("Animal se alimentou");
    }

    protected getEnergia(): number {
        return this.energia;
    }

    protected setEnergia(valor: number): void {
        this.energia = valor;
    }

    statusEnergia(): void {
        console.log(`Energia atual: ${this.energia}`);
    }
}

class Leao extends Animal {
    constructor() {
        super(50);
    }

    comer(): void {
        console.log("Leão está caçando...");
        this.setEnergia(this.getEnergia() - 15);
        console.log("Leão gastou energia na caçada");
        this.setEnergia(this.getEnergia() + 30);
        console.log("Leão se alimentou e recuperou energia");
    }
}

class Passaro extends Animal {
    constructor() {
        super(20);
    }

    comer(): void {
        console.log("Pássaro está comendo...");
        this.setEnergia(this.getEnergia() + 10);
        console.log("Pássaro se alimentou");
    }
}

console.log("=== EXERCÍCIO 4: ANIMAIS E ENERGIA ===\n");

const leao = new Leao();
const passaro = new Passaro();

console.log("--- Leão ---");
leao.statusEnergia();
leao.comer();
leao.statusEnergia();

console.log("\n--- Pássaro ---");
passaro.statusEnergia();
passaro.comer();
passaro.statusEnergia();

const animais: Animal[] = [leao, passaro];

console.log("\n--- Status de todos os animais ---");
animais.forEach((animal, index) => {
    console.log(`Animal ${index + 1}:`);
    animal.statusEnergia();
});
