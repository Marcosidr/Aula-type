interface Tarefa {
    descricao: string;
    tipo: 'projeto' | 'diaria';
}

abstract class GerenciadorTarefas {
    protected tarefas: Tarefa[] = [];

    abstract addTask(tarefa: string): void;
    abstract listTasks(): string[];

    protected tarefaExiste(tarefa: string): boolean {
        return this.tarefas.some(t => t.descricao === tarefa);
    }
}

class Projeto extends GerenciadorTarefas {
    private nomeProjeto: string;

    constructor(nomeProjeto: string) {
        super();
        this.nomeProjeto = nomeProjeto;
    }

    addTask(tarefa: string): void {
        if (this.tarefaExiste(tarefa)) {
            console.log(`Tarefa "${tarefa}" já existe no projeto ${this.nomeProjeto}`);
            return;
        }
        this.tarefas.push({ descricao: tarefa, tipo: 'projeto' });
        console.log(`Tarefa "${tarefa}" adicionada ao projeto ${this.nomeProjeto}`);
    }

    listTasks(): string[] {
        return this.tarefas.map(t => `[PROJETO] ${t.descricao}`);
    }

    getNomeProjeto(): string {
        return this.nomeProjeto;
    }
}

class TarefasDiarias extends GerenciadorTarefas {
    addTask(tarefa: string): void {
        if (this.tarefaExiste(tarefa)) {
            console.log(`Tarefa diária "${tarefa}" já existe`);
            return;
        }
        this.tarefas.push({ descricao: tarefa, tipo: 'diaria' });
        console.log(`Tarefa diária "${tarefa}" adicionada`);
    }

    listTasks(): string[] {
        return this.tarefas.map(t => `[DIÁRIA] ${t.descricao}`);
    }
}

console.log("=== SISTEMA DE TAREFAS E PROJETOS ===\n");

const projeto1 = new Projeto("Website Redesign");
projeto1.addTask("Criar wireframes");
projeto1.addTask("Desenvolver página inicial");
projeto1.addTask("Criar wireframes");
console.log("\nTarefas do Projeto:");
projeto1.listTasks().forEach(tarefa => console.log(tarefa));

console.log("\n");

const tarefasDiarias = new TarefasDiarias();
tarefasDiarias.addTask("Ler emails");
tarefasDiarias.addTask("Fazer exercícios");
tarefasDiarias.addTask("Revisar código");
tarefasDiarias.addTask("Ler emails");
console.log("\nTarefas Diárias:");
tarefasDiarias.listTasks().forEach(tarefa => console.log(tarefa));
