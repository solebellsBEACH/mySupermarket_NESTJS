import { ApiProperty } from "@nestjs/swagger";

export class CreateDepartmentDTO {
    @ApiProperty({ description: 'Nome ' })
    name: string;
    @ApiProperty({ description: 'Imagem ' })
    image: string;
}