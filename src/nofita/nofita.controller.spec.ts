import { Test, TestingModule } from '@nestjs/testing';
import { NofitaController } from './nofita.controller';
import { NofitaService } from './nofita.service';

describe('NofitaController', () => {
  let controller: NofitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NofitaController],
      providers: [NofitaService],
    }).compile();

    controller = module.get<NofitaController>(NofitaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
