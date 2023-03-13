import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizeDto } from './dto/create-quiz.dto';
import { Quiz } from './entity/quiz.entity';

@Injectable()
export class QuizService {

  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>
  ) {}

  getAllQuiz() {
    return [1,2,3];
  }

  async createNewQuiz(quiz: CreateQuizeDto) {
    return await this.quizRepository.save(quiz);
  }
}
