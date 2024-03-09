import { IsNotEmpty, IsOptional, IsString, MinLength, IsIn } from "class-validator"
import { TaskStatus } from "../task.entity"

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string

    @IsString()
    description: string
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status?: TaskStatus
}


export class DeleteTaskDto {
    id: string
}