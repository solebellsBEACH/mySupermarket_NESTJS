import { ApiProperty } from "@nestjs/swagger";

export class FindProductQuery {
    @ApiProperty({ required: false, description: 'Nome ' })
    name?: string;
    @ApiProperty({ required: false, description: 'Unidade de medida ' })
    unitType?: 'unit' | 'peso' | 'ml';
    @ApiProperty({ required: false, description: 'Marca do produto ' })
    brand?: string;
    @ApiProperty({ required: false, description: 'Preço do produto ' })
    price?: number;
}