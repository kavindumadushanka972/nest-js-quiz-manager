import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionService } from 'src/question/question.service';
import { Repository } from 'typeorm';
import { CreateOptionDto } from './dto/create-option.dto';
import { Option } from './entity/option.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
    private questionService: QuestionService
  ) {}

  async createOption(option: CreateOptionDto): Promise<Option> {
    const question = await this.questionService.getQuestion(option.questionId);

    const newOption = await this.optionRepository.save({
      option: option.option,
      isCorrect: option.isCorrect
    })

    question.options = [...question.options, newOption];
    await question.save()

    return newOption;
  }
}
