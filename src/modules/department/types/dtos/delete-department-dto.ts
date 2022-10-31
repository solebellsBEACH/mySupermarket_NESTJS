import { ApiProperty } from "@nestjs/swagger";

export class DeleteDepartmentQuery {
    @ApiProperty({ description: 'Id ' , required:true})
    id: string;
}
