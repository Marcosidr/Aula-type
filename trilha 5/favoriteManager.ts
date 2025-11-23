abstract class GerenciadorFavoritos {
    protected favoritos: string[] = [];

    abstract addFavorite(item: string): void;

    getFavorites(): string[] {
        return [...this.favoritos];
    }

    protected ehFavorito(item: string): boolean {
        return this.favoritos.includes(item);
    }
}

class GerenciadorFilmes extends GerenciadorFavoritos {
    addFavorite(item: string): void {
        if (this.ehFavorito(item)) {
            console.log(`[FILMES] "${item}" já está nos favoritos`);
            return;
        }
        
        this.favoritos.push(item);
        this.favoritos.sort();
        console.log(`[FILMES] "${item}" adicionado aos favoritos`);
    }

    getFavorites(): string[] {
        return [...this.favoritos].sort();
    }
}

class GerenciadorLivros extends GerenciadorFavoritos {
    addFavorite(item: string): void {
        if (this.ehFavorito(item)) {
            console.log(`[LIVROS] "${item}" já está nos favoritos`);
            return;
        }
        
        this.favoritos.unshift(item);
        console.log(`[LIVROS] "${item}" adicionado aos favoritos (no início da lista)`);
    }

    getFavorites(): string[] {
        return [...this.favoritos];
    }
}

console.log("=== SISTEMA DE GERENCIADOR DE FAVORITOS ===\n");

console.log("--- Filmes Favoritos ---");
const gerenciadorFilmes = new GerenciadorFilmes();
gerenciadorFilmes.addFavorite("Matrix");
gerenciadorFilmes.addFavorite("Inception");
gerenciadorFilmes.addFavorite("Avatar");
gerenciadorFilmes.addFavorite("Inception");
gerenciadorFilmes.addFavorite("Gladiador");
console.log("Lista de filmes (ordem alfabética):", gerenciadorFilmes.getFavorites());

console.log("\n--- Livros Favoritos ---");
const gerenciadorLivros = new GerenciadorLivros();
gerenciadorLivros.addFavorite("1984");
gerenciadorLivros.addFavorite("O Senhor dos Anéis");
gerenciadorLivros.addFavorite("Harry Potter");
gerenciadorLivros.addFavorite("1984");
gerenciadorLivros.addFavorite("Dom Casmurro");
console.log("Lista de livros (mais recente primeiro):", gerenciadorLivros.getFavorites());

console.log("\n--- Adicionando mais itens ---");
gerenciadorFilmes.addFavorite("Batman");
gerenciadorLivros.addFavorite("A Revolução dos Bichos");
console.log("\nFilmes atualizados:", gerenciadorFilmes.getFavorites());
console.log("Livros atualizados:", gerenciadorLivros.getFavorites());
