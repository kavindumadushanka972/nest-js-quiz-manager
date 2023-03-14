import { Body, Controller, Post } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { Option } from './entity/option.entity';
import { OptionService } from './option.service';

@Controller('option')
export class OptionController {

  constructor(private optionService: OptionService) {}

  @Post('/create')
  async saveOptionToQuestion(@Body() option: CreateOptionDto): Promise<Option> {
    return await this.optionService.createOption(option);
  }
  
}
