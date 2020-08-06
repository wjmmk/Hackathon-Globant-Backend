import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
      ) {}

      async getAll(): Promise<User[]> {
          return await this.userRepository.find();
      }

      async getUser(id: number): Promise<User> {
        return await this.userRepository.findOne(id);
      }

      async createUser(userNew: CreateUserDto): Promise<User> {
          const newUser = new User();
          newUser.name = userNew.name;
          newUser.birthdate = userNew.birthdate;
          newUser.address = userNew.address;
          newUser.city = userNew.city;
          newUser.email = userNew.email;
          newUser.avatar = userNew.avatar;
          newUser.miles = userNew.miles;
          
          return this.userRepository.save(newUser);
      }

      async updateUser(idUser: number, userActualizar: CreateUserDto): Promise<User> {
          const userUpdate = await this.userRepository.findOne(idUser);
          userUpdate.name = userActualizar.name;
          userUpdate.birthdate = userActualizar.birthdate;
          userUpdate.address = userActualizar.address;
          userUpdate.city = userActualizar.city;
          userUpdate.email = userActualizar.email;
          userUpdate.avatar = userActualizar.avatar;
          userUpdate.miles = userActualizar.miles;

          return await this.userRepository.save(userUpdate);
      }

      async deleteUser(idMensaje: number): Promise<any> {
          return await this.userRepository.delete(idMensaje);
      }
}
