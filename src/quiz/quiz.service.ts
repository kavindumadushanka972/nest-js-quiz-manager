import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, Pagination, paginate } from 'nestjs-typeorm-paginate';
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
    // return this.quizRepository
    //   .createQueryBuilder('q')
    //   .leftJoinAndSelect('q.questions', 'qt')
    //   .leftJoinAndSelect('qt.options', 'o')
    //   .getMany();
    return await this.quizRepository.find({relations: ['questions', 'questions.options']})
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Quiz>> {
    const qb = this.quizRepository.createQueryBuilder('q');
    qb.orderBy('q.id', 'DESC')
    return paginate<Quiz>(qb, options);
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: { id: id },
      relations: ['questions', 'questions.options'],
    });
  }

  async createNewQuiz(quiz: CreateQuizeDto): Promise<Quiz> {
    return await this.quizRepository.save(quiz);
  }
}
