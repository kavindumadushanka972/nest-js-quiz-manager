import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateOptionDto } from './dto/create-option.dto';
import { Option } from './entity/option.entity';
import { OptionService } from './option.service';

@ApiTags('Quiz')
@Controller('option')
export class OptionController {

  constructor(private optionService: OptionService) {}

  @ApiSecurity('bearer')
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async saveOptionToQuestion(@Body() option: CreateOptionDto): Promise<Option> {
    return await this.optionService.createOption(option);
  }
  
}
