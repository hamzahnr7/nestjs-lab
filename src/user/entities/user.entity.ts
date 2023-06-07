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

  @Generated('increment')
  @OneToMany(() => Todo, (todo) => todo.id)
  todo: Todo[];
  // fk1: string;
}
