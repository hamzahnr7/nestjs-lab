import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo/entities/todo.entity';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USER,
        password: String(process.env.DB_PASS),
        database: process.env.DB_NAME,
        entities: [Todo, User],
        synchronize: true, // change to false if on Production
      }),
    }),
  ],
})
export class DatabaseModule {}
