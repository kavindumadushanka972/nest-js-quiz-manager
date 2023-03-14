import { IsNotEmpty, MinLength } from "class-validator";

export class CreateOptionDto {
  @IsNotEmpty()
  @MinLength(1)
  option: string;

  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  isCorrect: boolean; 

}