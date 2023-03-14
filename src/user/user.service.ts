import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async doUserRegistration(userData: UserRegisterRequestDto): Promise<User> {

    const user = new User();
    user.name = userData.name;
    user.email = userData.email;
    user.password = userData.password;
    
    return this.userRepository.save(user);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({where: {email: email}})
  }
}
