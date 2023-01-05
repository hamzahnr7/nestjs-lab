import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ) { }

  async createTodo(todo: CreateTodoDto) {
    return await this.todoRepository.save(todo);
  }

  async getAllTodo() {
    return await this.todoRepository.find();
  }

  async getTodo(id: number) {
    return await this.todoRepository.findOne({ where: { id } });
  }

  async updateTodo(id: number, updateTodoDto: UpdateTodoDto) {
    return await this.todoRepository.update(id, updateTodoDto);
  }

  async removeTodo(id: number) {
    return await this.todoRepository.delete(id);
  }
}
