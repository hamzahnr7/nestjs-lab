import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NofitaModule } from './nofita/nofita.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entities/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'masukaja',
      database: 'todo-app',
      // host: String(process.env.DB_HOST),
      // port: Number(process.env.DB_PORT),
      // username: process.env.DB_USER,
      // password: String(process.env.DB_PASS),
      // database: process.env.DB_NAME,
      entities: [Todo],
      synchronize: true,
  }),
    ConfigModule.forRoot({
      envFilePath: 'env/dev.env',
      isGlobal: true,
    }),
    NofitaModule,
    AuthModule,
    TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
