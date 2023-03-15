import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async doUserRegistration(userData: UserRegisterRequestDto): Promise<any> {

    const user = new User();
    user.name = userData.name;
    user.email = userData.email;
    user.password = userData.password;
    
    const newUser = await this.userRepository.save(user);

    if (newUser) {
      return {
        access_token: this.jwtService.sign({
          name: newUser.name,
          sub: newUser.id,
          email: newUser.email
        })
      };
    }

    return new BadRequestException()
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({where: {email: email}})
  }
}
