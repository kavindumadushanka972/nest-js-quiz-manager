import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './entity/question.entity';
import { QuestionService } from './question.service';

@ApiTags('Quiz')
@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
  ) {}
  
  @ApiSecurity('bearer')
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    return await this.questionService.createQuestion(question);
  }

  @Get('/:id')
  async getQuestionById(@Param('id', ParseIntPipe) id: number): Promise<Question> {
    return await this.questionService.getQuestion(id);
  }
}
