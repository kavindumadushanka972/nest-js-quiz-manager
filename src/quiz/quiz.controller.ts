import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateQuizeDto } from './dto/create-quiz.dto';
import { Quiz } from './entity/quiz.entity';
import { QuizService } from './quiz.service';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {

  constructor(private quizService: QuizService) {}

  @ApiOkResponse({description: 'List of quizes', type: Quiz})
  @Get()
  async getAllQuiz(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<Quiz>> {
    const options: IPaginationOptions = {
      limit,
      page
    }
    return await this.quizService.paginate(options);
  }

  @Get('/:id') 
  @ApiOkResponse()
  async getQuiz(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }

  @ApiSecurity('bearer')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ description: 'The quiz that got created', type: Quiz })
  @Post('/create')
  async createQuiz(@Body() quizData: CreateQuizeDto): Promise<Quiz> {
    return await this.quizService.createNewQuiz(quizData);
  }
}
