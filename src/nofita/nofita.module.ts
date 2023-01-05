import { Module } from '@nestjs/common';
import { NofitaService } from './nofita.service';
import { NofitaController } from './nofita.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [NofitaController],
  providers: [NofitaService]
})
export class NofitaModule {}
