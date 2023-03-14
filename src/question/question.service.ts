import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/quiz/entity/quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './entity/question.entity';
import { QuizService } from 'src/quiz/quiz.service';

@Injectable()
export class QuestionService {

  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    private quizService: QuizService,
  ) {}

  async createQuestion(question: CreateQuestionDto): Promise<Question> {
    // fetch quiz from database
    const quiz = await this.quizService.getQuizById(question.quizId);

    // save new question
    const newQuestion = await this.questionRepository.save({
      question: question.question
    });

    // add question to quizes accrding to Quiz entity
    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion;
  }

  async getQuestion(id: number): Promise<Question> {
    return await this.questionRepository.findOne({where: {id: id}, relations: ['options']});
  }

}
