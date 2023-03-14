import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Question } from './question/entity/question.entity';
import { Quiz } from './quiz/entity/quiz.entity';
import { QuizModule } from './quiz/quiz.module';
import { QuestionModule } from './question/question.module';
import { Option } from './option/entity/option.entity';
import { OptionModule } from './option/option.module';
import { UserModule } from './user/user.module';
import { User } from './user/entity/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Quiz, Question, Option, User],
      synchronize: process.env.DB_SYNCHRONIZE === 'true', // should be false in production
    }),
    QuizModule,
    QuestionModule,
    OptionModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
