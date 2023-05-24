import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../interfaces/product.interface";

@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform{

    transform(products: Product[], sortBy?: keyof Product | ''): Product[] {
        switch(sortBy) {
            case "name":
                return products.sort((producA, producB)=> producA.name > producB.name ? 1 : -1);
            case "available":
                return products.sort((producA, producB)=> producA.available > producB.available ? 1 : -1);
            case "color":
                return products.sort((producA, producB)=> producA.color > producB.color ? 1 : -1);
            default:
                return products;
        }
    }

}