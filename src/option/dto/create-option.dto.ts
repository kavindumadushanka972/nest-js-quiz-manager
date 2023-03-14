import { IsNotEmpty, MinLength } from "class-validator";

export class CreateOptionDto {
  @IsNotEmpty()
  @MinLength(3)
  option: string;

  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  isCorrect: boolean; 

}