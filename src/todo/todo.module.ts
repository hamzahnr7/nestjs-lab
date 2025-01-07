import { Module } from '@nestjs/common'
import { TodoService } from './todo.service'
import { TodoController } from './todo.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Todo } from './entities/todo.entity'
import { JwtGuard } from 'src/guards/jwt.guard'
import { AuthModule } from 'src/auth/auth.module'
// import { JwtModule } from '@nestjs/jwt'
// import { AuthService } from 'src/auth/auth.service'

@Module({
    imports: [TypeOrmModule.forFeature([Todo]), AuthModule],

    controllers: [TodoController],

    providers: [TodoService, JwtGuard],
})
export class TodoModule {}
