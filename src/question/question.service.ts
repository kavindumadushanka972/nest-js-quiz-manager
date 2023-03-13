import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './entity/question.entity';

@Injectable()
export class QuestionService {

  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>
  ) {}

  async createQuestion(question: CreateQuestionDto): Promise<Question> {
    return this.questionRepository.save(question);
  }

}
