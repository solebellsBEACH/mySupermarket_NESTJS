import { ApiProperty } from "@nestjs/swagger";

export class FindDepartmentQuery {
    @ApiProperty({ description: 'Nome ', required: false })
    name: string;
    @ApiProperty({ description: 'Id ', required: false })
    id: string;
}