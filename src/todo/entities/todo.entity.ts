import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  status: string;

  @Column({ type: 'date' })
  deadline: Date;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
