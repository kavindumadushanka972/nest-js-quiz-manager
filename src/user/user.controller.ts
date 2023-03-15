import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @ApiCreatedResponse({ description: 'Access token as reponse'})
  @ApiBadRequestResponse({ description: 'User cannont register. Try again.'})
  doUserRegistration(@Body() userData: UserRegisterRequestDto): Promise<any> {
    return this.userService.doUserRegistration(userData);
  }
}
