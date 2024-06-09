import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';

/**
 * Controlador de tarefas que lida com requisições HTTP para criar, buscar, atualizar e remover tarefas.
 * Utiliza o serviço de tarefas (TaskService) para realizar operações CRUD.
 */
@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) {}

    /**
     * Cria uma nova tarefa.
     * @param task - Dados da tarefa a ser criada (TaskDto).
     * @returns void
     */
    @Post()
    create(@Body() task: TaskDto) {
        this.taskService.create(task);
    }

    /**
     * Busca uma tarefa pelo ID.
     * @param id - ID da tarefa a ser buscada.
     * @returns TaskDto - Dados da tarefa encontrada.
     */
    @Get('/:id')
    findById(@Param('id') id: string): TaskDto {
        return this.taskService.findById(id);
    }

    /**
     * Busca todas as tarefas com base em parâmetros opcionais de filtragem.
     * @param params - Parâmetros de filtragem para a busca de tarefas.
     * @returns TaskDto[] - Lista de tarefas encontradas.
     */
    @Get()
    findAll(@Query() params: FindAllParameters): TaskDto[] {
        return this.taskService.findAll(params);
    }

    /**
     * Atualiza uma tarefa existente.
     * @param task - Dados da tarefa a ser atualizada (TaskDto).
     * @returns void
     */
    @Put()
    update(@Body() task: TaskDto) {
        this.taskService.update(task);
    }

    /**
     * Remove uma tarefa pelo ID.
     * @param id - ID da tarefa a ser removida.
     * @returns void
     */
    @Delete('/:id')
    remove(@Param('id') id: string) {
        return this.taskService.remove(id);
    }
}
