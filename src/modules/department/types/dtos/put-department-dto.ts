import { ApiProperty } from "@nestjs/swagger";

export class PutDepartmentDTO{
    @ApiProperty({ description: 'Id ', required: true})
    id: string;
    @ApiProperty({ description: 'Nome ' })
    name: string;
    @ApiProperty({ description: 'Imagem ' })
    image: string;
}