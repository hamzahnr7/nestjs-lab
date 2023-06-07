import { Todo } from 'src/todo/entities/todo.entity';
import {
  Column,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  notelp: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
