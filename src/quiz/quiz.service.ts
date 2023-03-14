import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/question/entity/question.entity';
import { Repository } from 'typeorm';
import { CreateQuizeDto } from './dto/create-quiz.dto';
import { Quiz } from './entity/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}

  async getAllQuiz(): Promise<Quiz []> {
    return this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .leftJoinAndSelect('qt.options', 'o')
      .getMany();
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: { id: id },
      relations: ['questions'],
    });
  }

  async createNewQuiz(quiz: CreateQuizeDto): Promise<Quiz> {
    return await this.quizRepository.save(quiz);
  }
}
