import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDTO{
    @ApiProperty({ description: 'Nome ' })
    name: string;
    @ApiProperty({ description: 'Unidade de medida ' })
    unitType: 'unit'|'peso'|'ml';
    @ApiProperty({ description: 'Imagem ' })
    image: string;
    @ApiProperty({ description: 'Marca do produto ' })
    brand: string;
    @ApiProperty({ description: 'Preço do produto ' })
    price: number;
}