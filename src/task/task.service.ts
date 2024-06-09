import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';

/**
 * Serviço de tarefas que lida com a lógica de negócios para criar, buscar, atualizar e remover tarefas.
 */
@Injectable()
export class TaskService {

    private tasks: TaskDto[] = [];

    /**
     * Cria uma nova tarefa e a adiciona à lista de tarefas.
     * @param task - Dados da tarefa a ser criada (TaskDto).
     */
    create(task: TaskDto) {
        this.tasks.push(task);
        console.log(this.tasks);
    }

    /**
     * Busca uma tarefa pelo ID.
     * @param id - ID da tarefa a ser buscada.
     * @returns TaskDto - Dados da tarefa encontrada.
     * @throws HttpException - Se a tarefa com o ID fornecido não for encontrada.
     */
    findById(id: string): TaskDto {
        const foundTask = this.tasks.filter(t => t.id === id);

        if (foundTask.length) {
            return foundTask[0];
        }

        throw new HttpException(`Task with id ${id} not found`, HttpStatus.NOT_FOUND);
    }

    /**
     * Busca todas as tarefas com base em parâmetros opcionais de filtragem.
     * @param params - Parâmetros de filtragem para a busca de tarefas.
     * @returns TaskDto[] - Lista de tarefas encontradas.
     */
    findAll(params: FindAllParameters): TaskDto[] {
        return this.tasks.filter(t => {
            let match = true;

            if (params.title != undefined && !t.title.includes(params.title)) {
                match = false;
            }

            if (params.description != undefined && !t.description.includes(params.description)) {
                match = false;
            }

            return match;
        });
    }

    /**
     * Atualiza uma tarefa existente.
     * @param task - Dados da tarefa a ser atualizada (TaskDto).
     * @throws HttpException - Se a tarefa com o ID fornecido não for encontrada.
     */
    update(task: TaskDto) {
        let taskIndex = this.tasks.findIndex(t => t.id === task.id);

        if (taskIndex >= 0) {
            this.tasks[taskIndex] = task;
            return;
        }

        throw new HttpException(`Task with id ${task.id} not found`, HttpStatus.BAD_REQUEST);
    }

    /**
     * Remove uma tarefa pelo ID.
     * @param id - ID da tarefa a ser removida.
     * @throws HttpException - Se a tarefa com o ID fornecido não for encontrada.
     */
    remove(id: string) {
        let taskIndex = this.tasks.findIndex(t => t.id === id);

        if (taskIndex >= 0) {
            this.tasks.splice(taskIndex, 1);
            return;
        }

        throw new HttpException(`Task with id ${id} not found`, HttpStatus.BAD_REQUEST);
    }
}
