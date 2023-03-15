import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { REGEX, MESSAGES } from 'src/app.utils';
import { ApiProperty } from '@nestjs/swagger';

export class UserRegisterRequestDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe'
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The email address of the user',
    example: 'john.doe@gmail.com'
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'Password@123'
  })
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGES.PASSWORD_RULE_MSG,
  })
  password: string;

  @ApiProperty({
    description: 'Confirm the password',
    example: 'Password@123'
  })
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGES.PASSWORD_RULE_MSG,
  })
  confirm_password: string;
}
