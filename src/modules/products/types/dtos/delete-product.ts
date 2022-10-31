import { ApiProperty } from "@nestjs/swagger";

export class DeleteProductQuery {
    @ApiProperty({ description: 'UUID do produto' })
    uuid: string;
}