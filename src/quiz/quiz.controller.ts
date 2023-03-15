import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateQuizeDto } from './dto/create-quiz.dto';
import { Quiz } from './entity/quiz.entity';
import { QuizService } from './quiz.service';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {

  constructor(private quizService: QuizService) {}

  @Get()
  async getAllQuiz(): Promise<Quiz []> {
    return await this.quizService.getAllQuiz();
  }

  @Get('/:id') 
  async getQuiz(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }

  @Post('/create')
  async createQuiz(@Body() quizData: CreateQuizeDto): Promise<Quiz> {
    return await this.quizService.createNewQuiz(quizData);
  }
}
