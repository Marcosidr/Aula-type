abstract class SistemaVotacao {
    protected votos: Record<string, number> = {};

    abstract voteFor(candidato: string): void;
    abstract getResults(): object;

    protected adicionarVoto(candidato: string): void {
        if (candidato in this.votos) {
            this.votos[candidato]++;
        } else {
            this.votos[candidato] = 1;
        }
    }
}

class Eleicao extends SistemaVotacao {
    private nomeEleicao: string;

    constructor(nomeEleicao: string) {
        super();
        this.nomeEleicao = nomeEleicao;
    }

    voteFor(candidato: string): void {
        this.adicionarVoto(candidato);
        console.log(`[ELEIÇÃO: ${this.nomeEleicao}] Voto registrado para: ${candidato}`);
    }

    getResults(): object {
        return {
            eleicao: this.nomeEleicao,
            totalVotos: Object.values(this.votos).reduce((soma, votos) => soma + votos, 0),
            resultados: { ...this.votos }
        };
    }
}

class Enquete extends SistemaVotacao {
    private pergunta: string;

    constructor(pergunta: string) {
        super();
        this.pergunta = pergunta;
    }

    voteFor(candidato: string): void {
        this.adicionarVoto(candidato);
        console.log(`[ENQUETE: ${this.pergunta}] Voto registrado para: ${candidato}`);
    }

    getResults(): object {
        const candidatosOrdenados = Object.entries(this.votos)
            .sort((a, b) => b[1] - a[1])
            .map(([candidato, votos]) => ({ candidato, votos }));

        return {
            pergunta: this.pergunta,
            ranking: candidatosOrdenados,
            totalVotos: Object.values(this.votos).reduce((soma, votos) => soma + votos, 0)
        };
    }
}

console.log("=== SISTEMA DE VOTAÇÃO ===\n");

console.log("--- Eleição para Presidente ---");
const eleicao = new Eleicao("Presidente 2024");
eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato B");
eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato C");
eleicao.voteFor("Candidato B");
eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato B");

console.log("\nResultados da Eleição:");
console.log(JSON.stringify(eleicao.getResults(), null, 2));

console.log("\n--- Enquete: Melhor Linguagem de Programação ---");
const enquete = new Enquete("Qual a melhor linguagem de programação?");
enquete.voteFor("JavaScript");
enquete.voteFor("Python");
enquete.voteFor("TypeScript");
enquete.voteFor("Python");
enquete.voteFor("JavaScript");
enquete.voteFor("Python");
enquete.voteFor("Java");
enquete.voteFor("Python");
enquete.voteFor("TypeScript");

console.log("\nResultados da Enquete (ordenado por votos):");
console.log(JSON.stringify(enquete.getResults(), null, 2));
