import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFiles } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, DeleteTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {

    constructor(private tasksService: TaskService) { }

    @Get()
    getAllTask() {
        return this.tasksService.getAllTask();
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDto) {

        console.log(newTask)
        return this.tasksService.createTask(newTask.title, newTask.description);

    }

    @Delete()
    deleteTask(@Body() newTask: DeleteTaskDto){

        return this.tasksService.deleteTask(newTask.id)

    }

    @Patch(":id")
    updateTask(@Param("id") id: string, @Body() updatedFields: UpdateTaskDto){
        this.tasksService.updateTask(id, updatedFields)
    }

}
