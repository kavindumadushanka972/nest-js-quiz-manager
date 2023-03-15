import { Body, Controller, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @ApiCreatedResponse({ description: 'Created user object as response', type: User})
  @ApiBadRequestResponse({ description: 'User cannont register. Try again.'})
  doUserRegistration(@Body() userData: UserRegisterRequestDto): Promise<User> {
    return this.userService.doUserRegistration(userData);
  }
}
