class Pagamento {
    protected valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    processar(): void {
        console.log("Processando pagamento...");
    }
}

class PagamentoCartao extends Pagamento {
    private numeroCartao: string;

    constructor(valor: number, numeroCartao: string) {
        super(valor);
        this.numeroCartao = numeroCartao;
    }

    private validarCartao(): boolean {
        return this.numeroCartao.length === 16;
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log(`Pagamento de R$ ${this.valor.toFixed(2)} aprovado no cartão ${this.numeroCartao}`);
        } else {
            console.log("Número do cartão inválido!");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    private gerarCodigoBoleto(): string {
        return Math.random().toString(36).substring(2, 15).toUpperCase();
    }

    processar(): void {
        const codigo = this.gerarCodigoBoleto();
        console.log(`Boleto gerado: ${codigo}`);
        console.log(`Valor: R$ ${this.valor.toFixed(2)}`);
    }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach((pagamento, index) => {
        console.log(`\nPagamento ${index + 1}:`);
        pagamento.processar();
    });
}

console.log("=== EXERCÍCIO 3: SISTEMA DE PAGAMENTO ===\n");

const pagamento1 = new PagamentoCartao(150.50, "1234567890123456");
const pagamento2 = new PagamentoBoleto(200.00);
const pagamento3 = new PagamentoCartao(75.00, "12345");

const pagamentos: Pagamento[] = [pagamento1, pagamento2, pagamento3];

processarPagamentos(pagamentos);
