// Interface ProdutoLoja
export interface ProdutoLoja {
    codigo: number;
    nome: string;
}

// Classe Loja
export class Loja {
    produtos: ProdutoLoja[] = [];

    constructor(produtos: ProdutoLoja[]) {
        this.produtos = produtos;
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}
