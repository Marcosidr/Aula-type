// Interface Livro
export interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

// Classe Biblioteca
export class Biblioteca {
    livros: Livro[] = [];

    constructor(livros: Livro[]) {
        this.livros = livros;
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}
