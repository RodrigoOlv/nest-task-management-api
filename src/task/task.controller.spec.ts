import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskDto } from './task.dto';

describe('TaskController', () => {
  let controller: TaskController;
  let taskService: TaskService;

  beforeEach(async () => {
    const mockTaskService = {
      create: jest.fn(),
      findById: jest.fn((id: string) => ({
        id,
        title: 'Test task',
        description: 'Test description',
        expirationDate: new Date(),
      })),
      update: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        {
          provide: TaskService,
          useValue: mockTaskService,
        },
      ],
    }).compile();

    controller = module.get<TaskController>(TaskController);
    taskService = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call TaskService.create with the correct parameters', () => {
    const task: TaskDto = {
      id: '1',
      title: 'Test task',
      description: 'Test description',
      expirationDate: new Date(),
    };
    controller.create(task);
    expect(taskService.create).toHaveBeenCalledWith(task);
  });

  it('should call TaskService.findById with the correct parameters', () => {
    const id = '1';
    const result = controller.findById(id);
    expect(taskService.findById).toHaveBeenCalledWith(id);
    expect(result).toEqual({
      id,
      title: 'Test task',
      description: 'Test description',
      expirationDate: expect.any(Date),
    });
  });

  it('should call TaskService.update with the correct parameters', () => {
    const task: TaskDto = {
      id: '1',
      title: 'Updated task',
      description: 'Updated description',
      expirationDate: new Date(),
    };
    controller.update(task);
    expect(taskService.update).toHaveBeenCalledWith(task);
  });
});
