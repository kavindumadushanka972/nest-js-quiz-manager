import { Test, TestingModule } from '@nestjs/testing';
import { Quiz } from './quiz';

describe('Quiz', () => {
  let provider: Quiz;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Quiz],
    }).compile();

    provider = module.get<Quiz>(Quiz);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
