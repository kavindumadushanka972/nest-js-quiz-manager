import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { REGEX, MESSAGES } from 'src/app.utils';
export class UserRegisterRequestDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGES.PASSWORD_RULE_MSG,
  })
  password: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGES.PASSWORD_RULE_MSG,
  })
  confirm_password: string;
}
