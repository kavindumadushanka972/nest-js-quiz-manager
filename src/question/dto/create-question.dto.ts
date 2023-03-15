import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MinLength } from "class-validator";

export class CreateQuestionDto {
  @ApiProperty({
    description: 'The question',
    example: 'Is NestJS is a framework?'
  })
  @IsNotEmpty()
  @MinLength(3)
  question: string;

  @ApiProperty({
    description: 'The quiz id',
    example: 1
  })
  @IsNotEmpty()
  quizId: number;
}