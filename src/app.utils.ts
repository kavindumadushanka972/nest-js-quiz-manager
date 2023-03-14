import { HttpStatus, ValidationPipe } from "@nestjs/common";

const PASSWORD_RULE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&=])[A-Za-z\d@$!%*?&=]{8,}$/;

const PASSWORD_RULE_MSG = 'Password must include atleast one capital letter, simple letter, number, & special character';

export const REGEX = {
  PASSWORD_RULE,
}

export const MESSAGES = {
  PASSWORD_RULE_MSG,
}