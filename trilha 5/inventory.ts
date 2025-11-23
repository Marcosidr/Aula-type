abstract class Inventario {
    protected itens: Record<string, number> = {};

    abstract addItem(item: string, quantidade: number): void;
    abstract removeItem(item: string): void;

    getInventory(): Record<string, number> {
        return { ...this.itens };
    }

    protected itemExiste(item: string): boolean {
        return item in this.itens;
    }
}

class InventarioArmazem extends Inventario {
    addItem(item: string, quantidade: number): void {
        if (quantidade <= 0) {
            console.log("Quantidade deve ser maior que zero");
            return;
        }

        if (this.itemExiste(item)) {
            this.itens[item] += quantidade;
        } else {
            this.itens[item] = quantidade;
        }
        console.log(`[ARMAZÉM] ${quantidade} unidade(s) de "${item}" adicionada(s). Total: ${this.itens[item]}`);
    }

    removeItem(item: string): void {
        if (this.itemExiste(item)) {
            delete this.itens[item];
            console.log(`[ARMAZÉM] Item "${item}" removido do inventário`);
        } else {
            console.log(`[ARMAZÉM] Item "${item}" não encontrado no inventário`);
        }
    }
}

class InventarioLoja extends Inventario {
    private readonly QUANTIDADE_MAXIMA = 10;

    addItem(item: string, quantidade: number): void {
        if (quantidade <= 0) {
            console.log("Quantidade deve ser maior que zero");
            return;
        }

        const quantidadeAtual = this.itens[item] || 0;
        const novaQuantidade = quantidadeAtual + quantidade;

        if (novaQuantidade > this.QUANTIDADE_MAXIMA) {
            console.log(`[LOJA] Não é possível adicionar ${quantidade} unidade(s) de "${item}". Limite máximo: ${this.QUANTIDADE_MAXIMA}. Quantidade atual: ${quantidadeAtual}`);
            return;
        }

        if (this.itemExiste(item)) {
            this.itens[item] += quantidade;
        } else {
            this.itens[item] = quantidade;
        }
        console.log(`[LOJA] ${quantidade} unidade(s) de "${item}" adicionada(s). Total: ${this.itens[item]}`);
    }

    removeItem(item: string): void {
        if (this.itemExiste(item)) {
            delete this.itens[item];
            console.log(`[LOJA] Item "${item}" removido do inventário`);
        } else {
            console.log(`[LOJA] Item "${item}" não encontrado no inventário`);
        }
    }
}

console.log("=== SISTEMA DE INVENTÁRIO ===\n");

console.log("--- Inventário do Armazém ---");
const armazem = new InventarioArmazem();
armazem.addItem("Caixas", 1000);
armazem.addItem("Paletes", 500);
armazem.addItem("Caixas", 500);
console.log("Inventário do Armazém:", armazem.getInventory());

console.log("\n--- Inventário da Loja ---");
const loja = new InventarioLoja();
loja.addItem("Notebook", 5);
loja.addItem("Mouse", 8);
loja.addItem("Mouse", 3);
loja.addItem("Teclado", 10);
loja.addItem("Teclado", 1);
console.log("Inventário da Loja:", loja.getInventory());

console.log("\n--- Removendo itens ---");
armazem.removeItem("Paletes");
loja.removeItem("Mouse");
loja.removeItem("Webcam");
console.log("\nInventário final do Armazém:", armazem.getInventory());
console.log("Inventário final da Loja:", loja.getInventory());
