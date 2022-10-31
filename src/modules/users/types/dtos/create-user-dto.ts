import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
    @ApiProperty({ description: 'Nome ' })
    name: string;
    @ApiProperty({ description: 'Email ' })
    email: string;
    @ApiProperty({ description: 'Senha ' })
    password: string;
}