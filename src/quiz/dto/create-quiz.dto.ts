import { IsNotEmpty, Length, MinLength } from 'class-validator';

export class CreateQuizeDto {
  @IsNotEmpty({ message: 'The quiz should have a title' })
  @Length(3, 255)
  title: string;

  @IsNotEmpty({ message: 'The quiz should have a description' })
  @MinLength(3)
  description: string;
}
