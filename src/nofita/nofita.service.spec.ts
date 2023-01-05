import { Test, TestingModule } from '@nestjs/testing';
import { NofitaService } from './nofita.service';

describe('NofitaService', () => {
  let service: NofitaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NofitaService],
    }).compile();

    service = module.get<NofitaService>(NofitaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
