import {
  Controller,
  UseGuards,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtGuard } from 'src/jwt/jwt.guard';

@Controller('todo')
@UseGuards(JwtGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDto);
  }

  @Get()
  getTodos() {
    return this.todoService.getAllTodo();
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todoService.getTodo(+id);
  }

  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.updateTodo(+id, updateTodoDto);
  }

  @Delete(':id')
  removeTodo(@Param('id') id: string) {
    return this.todoService.removeTodo(+id);
  }
}
