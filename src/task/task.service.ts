import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { randomUUID } from 'crypto';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {

    private tasks: Task[] = [{
        id: "1",
        title: "first task",
        description: "some task",
        status: TaskStatus.PENDING
    },]

    getAllTask() {

        return this.tasks
        
    }

    createTask(title: string, description: string) {

        const task = {
            id: randomUUID(),
            title,
            description,
            status: TaskStatus.PENDING
        }

        this.tasks.push(task)

        return task

    }

    deleteTask(id: string) {

        return this.tasks.filter(task => task.id !== id)
         

    }

    getTaskById(id: string): Task{
        return this.tasks.find(task => task.id === id)
    }

    updateTask(id: string, updatedFields: UpdateTaskDto):Task {

        const task = this.getTaskById(id)

        const newTask = Object.assign(task, updatedFields)

        this.tasks.map(task => task.id === id ? newTask : task)

        return newTask
    }

}
