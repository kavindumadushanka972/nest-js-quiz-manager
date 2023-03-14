import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from 'src/question/question.module';
import { Option } from './entity/option.entity';
import { OptionController } from './option.controller';
import { OptionService } from './option.service';

@Module({
  controllers: [OptionController],
  providers: [OptionService],
  imports: [
    QuestionModule,
    TypeOrmModule.forFeature([Option])
  ]
})
export class OptionModule {}
