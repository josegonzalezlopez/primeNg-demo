import { Pipe, PipeTransform } from "@angular/core";
import { Color } from "../interfaces/product.interface";

@Pipe({
    name: 'showColorName'
})
export class ShowColorNamePipe implements PipeTransform{
    transform(value: Color): string {
        switch(value){
            case Color.black:
                return 'Negro';
            case Color.blue:
                return 'Azul';
            case Color.green:
                return 'Verde';
            case Color.red:
                return 'Rojo';
            default:
                return 'Color no disponible'
        }
    }

}