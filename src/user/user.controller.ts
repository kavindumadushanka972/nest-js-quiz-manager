import { Body, Controller, Post } from '@nestjs/common';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  doUserRegistration(@Body() userData: UserRegisterRequestDto): Promise<User> {
    return this.userService.doUserRegistration(userData);
  }
}
