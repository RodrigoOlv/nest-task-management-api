import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';

/**
 * Controlador de usuários que lida com requisições HTTP para criar usuários.
 * Utiliza o serviço de usuários (UsersService) para realizar operações de criação de usuários.
 */
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    /**
     * Cria um novo usuário.
     * @param user - Dados do usuário a ser criado (UserDto).
     */
    @Post('/created')
    create(@Body() user: UserDto) {
        this.userService.create(user);
    }
}
