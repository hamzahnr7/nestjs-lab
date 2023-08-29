import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NofitaModule } from './nofita/nofita.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import { DatabaseModule } from './database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./env/development.env`, // Setting ENV file
      isGlobal: true,
    }),
    DatabaseModule,
    NofitaModule,
    AuthModule,
    TodoModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
