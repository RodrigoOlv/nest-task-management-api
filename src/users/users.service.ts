import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { v4 as uuid } from 'uuid';
import { hashSync as bcryptHashSync } from 'bcrypt';

/**
 * Serviço de usuários que lida com a lógica de negócios para criar usuários.
 */
@Injectable()
export class UsersService {

    private readonly users: UserDto[] = [
        {
            id: '1',
            username: 'user',
            password: '12345678'
        }
    ];

    /**
     * Cria um novo usuário, atribuindo um ID único e hash na senha.
     * @param newUser - Dados do novo usuário a ser criado (UserDto).
     */
    create(newUser: UserDto) {
        newUser.id = uuid();
        newUser.password = bcryptHashSync(newUser.password, 10);

        this.users.push(newUser);

        console.log(this.users);
    }
}
