abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    getNome(): string {
        return this.nome;
    }

    getSalario(): number {
        return this.salario;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}

class Operario extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const bonus = funcionario.calcularBonus();
        const salarioFinal = funcionario.getSalario() + bonus;
        console.log(`${funcionario.getNome()} - Salário: R$ ${funcionario.getSalario().toFixed(2)} + Bônus: R$ ${bonus.toFixed(2)} = Total: R$ ${salarioFinal.toFixed(2)}`);
    });
}

console.log("=== EXERCÍCIO 5: FUNCIONÁRIOS E BÔNUS ===\n");

const gerente1 = new Gerente("Carlos Silva", 5000);
const gerente2 = new Gerente("Ana Santos", 6000);
const operario1 = new Operario("João Pedro", 2000);
const operario2 = new Operario("Maria Oliveira", 2500);

const funcionarios: Funcionario[] = [gerente1, gerente2, operario1, operario2];

calcularSalarioComBonus(funcionarios);

console.log("\n--- Folha de Pagamento Total ---");
const totalSalarios = funcionarios.reduce((total, func) => {
    return total + func.getSalario() + func.calcularBonus();
}, 0);
console.log(`Total da folha: R$ ${totalSalarios.toFixed(2)}`);
