import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MinLength } from "class-validator";

export class CreateOptionDto {
  @ApiProperty({
    description: 'The option',
    example: 'Yes'
  })
  @IsNotEmpty()
  @MinLength(1)
  option: string;

  @ApiProperty({
    description: 'The question id',
    example: 1
  })
  @IsNotEmpty()
  questionId: number;

  @ApiProperty({
    description: 'Is the option is correct or not',
    example: true
  })
  @IsNotEmpty()
  isCorrect: boolean; 

}