import { Body, Controller, Post } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { OptionService } from './option.service';

@Controller('option')
export class OptionController {

  constructor(private optionService: OptionService) {}

  @Post('/create')
  saveOptionToQuestion(@Body() option: CreateOptionDto) {
    return option;
  }
  
}
