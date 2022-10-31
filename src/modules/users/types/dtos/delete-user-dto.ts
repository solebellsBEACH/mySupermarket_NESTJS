import { ApiProperty } from "@nestjs/swagger";

export class DeleteUserQuery {
    @ApiProperty({ description: 'UUID do User' })
    uuid: string;
}