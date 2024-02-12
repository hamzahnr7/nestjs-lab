import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,

    private readonly dataSource: DataSource,
  ) {}

  async getUser(param: string): Promise<User> {
    const userRepo = this.dataSource.getRepository(User);
    const user = await userRepo.findOne({ where: { id: param } });
    return user;
  }

  async createTodo(todo: CreateTodoDto, token: string) {
    const newTodo = new Todo();
    const userData = await this.getUser(token);
    newTodo.title = todo.title;
    newTodo.status = todo.status;
    newTodo.description = todo.description;
    newTodo.deadline = todo.deadline;
    newTodo.user = userData;
    return await this.todoRepository.save(newTodo);
  }

  async getTodos(param: any) {
    const user = await this.getUser(param);
    return await this.todoRepository.find({
      relations: { user: true },
      where: { user },
    });
  }

  async getTodo(id: number, token: string) {
    const user = await this.getUser(token);
    return await this.todoRepository.findOne({
      where: { id, user },
      relations: { user: true },
    });
  }

  async updateTodo(id: number, updateTodoDto: UpdateTodoDto, token: string) {
    const user = await this.getUser(token);
    return await this.todoRepository.update({ id, user }, updateTodoDto);
  }

  async removeTodo(id: number, token: string) {
    const user = await this.getUser(token);
    const deletedTask = await this.todoRepository.findOne({
      where: { id, user },
      relations: { user: true },
    });
    return await this.todoRepository.delete({ id: deletedTask.id });
  }
}
