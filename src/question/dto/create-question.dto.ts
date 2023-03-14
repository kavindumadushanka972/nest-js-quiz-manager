import { IsNotEmpty, MinLength } from "class-validator";

export class CreateQuestionDto {
  @IsNotEmpty()
  @MinLength(3)
  question: string;

  @IsNotEmpty()
  quizId: number;
}