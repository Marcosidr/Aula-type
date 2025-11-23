class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Deposito de R$ ${valor.toFixed(2)} realizado. Saldo: R$ ${this.saldo.toFixed(2)}`);
        } else {
            console.log("Valor invalido");
        }
    }

    sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Saldo: R$ ${this.saldo.toFixed(2)}`);
        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            console.log("Valor invalido");
        }
    }
}

const conta = new ContaBancaria("João Silva", 1000);
conta.depositar(500);
conta.sacar(200);
conta.sacar(2000);


class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }

    marcarComoLido(): void {
        this.lido = true;
        console.log(`Livro "${this.titulo}" marcado como lido`);
    }
}

const livro = new Livro("1984", "George Orwell", 328);
livro.marcarComoLido();


class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorEstoque(): number {
        return this.preco * this.quantidade;
    }
}

const produto = new Produto("Notebook", 3500, 10);
console.log(`Valor em estoque: R$ ${produto.calcularValorEstoque()}`);


class Temperatura {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    paraFahrenheit(): number {
        return (this.valor * 9/5) + 32;
    }

    paraKelvin(): number {
        return this.valor + 273.15;
    }
}

const temp = new Temperatura(25);
console.log(`${temp.valor}°C = ${temp.paraFahrenheit()}°F = ${temp.paraKelvin()}K`);


class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
    }

    listarCompromissos(): void {
        console.log("Compromissos:");
        this.compromissos.forEach((comp, i) => {
            console.log(`${i + 1}. ${comp}`);
        });
    }
}

const agenda = new Agenda();
agenda.adicionarCompromisso("Reunião às 10h");
agenda.adicionarCompromisso("Almoço às 12h");
agenda.listarCompromissos();