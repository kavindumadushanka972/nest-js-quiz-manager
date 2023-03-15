import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, MinLength } from 'class-validator';

export class CreateQuizeDto {
  @ApiProperty({
    description: 'The title of the quiz',
    example: 'Basics of NestJS'
  })
  @IsNotEmpty({ message: 'The quiz should have a title' })
  @Length(3, 255)
  title: string;

  @ApiProperty({
    description: 'The title of the quiz',
    example: 'This quiz is about basics of NestJS'
  })
  @IsNotEmpty({ message: 'The quiz should have a description' })
  @MinLength(3)
  description: string;
}
