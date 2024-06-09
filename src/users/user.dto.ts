/**
 * Data Transfer Object (DTO) para representar um usuário.
 * Contém as propriedades necessárias para definir um usuário.
 */
export class UserDto {
    /**
     * Identificador único do usuário.
     */
    id: string;

    /**
     * Nome de usuário.
     */
    username: string;

    /**
     * Senha do usuário.
     */
    password: string;
}
