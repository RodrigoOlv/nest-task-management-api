/**
 * Data Transfer Object (DTO) para representar uma tarefa.
 * Contém as propriedades necessárias para definir uma tarefa.
 */
export class TaskDto {
    /**
     * Identificador único da tarefa.
     */
    id: string;

    /**
     * Título da tarefa.
     */
    title: string;

    /**
     * Descrição detalhada da tarefa.
     */
    description: string;

    /**
     * Data de expiração da tarefa.
     */
    expirationDate: Date;
}

/**
 * Interface para os parâmetros de busca de tarefas.
 * Permite a filtragem de tarefas por título e descrição.
 */
export interface FindAllParameters {
    /**
     * Título das tarefas a serem buscadas.
     */
    title: string;

    /**
     * Descrição das tarefas a serem buscadas.
     */
    description: string;
}
