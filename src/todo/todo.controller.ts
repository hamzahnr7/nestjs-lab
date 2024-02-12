import {
    Controller,
    UseGuards,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Req,
} from '@nestjs/common'
import { TodoService } from './todo.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { JwtGuard } from 'src/guards/jwt.guard'

@Controller('todo')
@UseGuards(JwtGuard)
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Post()
    createTodo(@Body() createTodoDto: CreateTodoDto, @Req() req: any) {
        return this.todoService.createTodo(createTodoDto, req.payload)
    }

    @Get()
    getTodos(@Req() req: any) {
        return this.todoService.getTodos(req.payload)
    }

    @Get(':id')
    getTodo(@Param('id') id: string, @Req() req: any) {
        return this.todoService.getTodo(+id, req.payload)
    }

    @Patch(':id')
    updateTodo(
        @Param('id') id: string,
        @Body() updateTodoDto: UpdateTodoDto,
        @Req() req: any
    ) {
        return this.todoService.updateTodo(+id, updateTodoDto, req.payload)
    }

    @Delete(':id')
    removeTodo(@Param('id') id: string, @Req() req: any) {
        return this.todoService.removeTodo(+id, req.payload)
    }
}
