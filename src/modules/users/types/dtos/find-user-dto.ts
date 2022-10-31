import { ApiProperty } from "@nestjs/swagger";

export class FindUserDTO {
    @ApiProperty({ description: 'Nome ', required: false })
    name?: string;
    @ApiProperty({ description: 'Email ', required: false })
    email?: string;
}