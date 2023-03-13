import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateQuizeDto } from './dto/create-quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

  constructor(private quizService: QuizService) {}

  @Get()
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Post('/create')
  createQuiz(@Body() quizData: CreateQuizeDto) {
    return quizData;
  }
}
