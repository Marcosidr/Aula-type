// Interface LivroBiblioteca
export interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

// Classe BibliotecaGestao
export class BibliotecaGestao {
    livros: LivroBiblioteca[] = [];

    constructor(livros: LivroBiblioteca[]) {
        this.livros = livros;
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(l => l.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(l => l.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(l => l.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}
