import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { TasksService } from './tasks.service';
import { GetTasksFilterDto } from 'src/dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from 'src/dto/update-task-status.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasksRequest(@Query() filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksService.getTasks(filterDto);
  }

  @Get(':id')
  getTaskByIdRequest(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  /**
   * The @Body annotation enables the user to access the path parameters
   * from within the request.
   */
  @Post()
  createTaskRequest(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete(':id')
  deleteTaskByIdRequest(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteTaskById(id);
  }

  @Patch(':id/status')
  updateTaskStatusRequest(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  ): Promise<Task> {
    const { status } = updateTaskStatusDto;
    return this.tasksService.updateTaskStatus(id, status);
  }
}
