import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOptionDto } from './dto/create-option.dto';
import { Option } from './entity/option.entity';
import { OptionService } from './option.service';

@ApiTags('Quiz')
@Controller('option')
export class OptionController {

  constructor(private optionService: OptionService) {}

  @Post('/create')
  async saveOptionToQuestion(@Body() option: CreateOptionDto): Promise<Option> {
    return await this.optionService.createOption(option);
  }
  
}
