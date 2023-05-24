import { Component } from '@angular/core';
import { Color, Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  
  public isUpperCase: boolean = false;
  public products: Product[] = [
    { name: 'zapatilla', available: true, color: Color.blue },
    { name: 'remera', available: false, color: Color.black },
    { name: 'pantalon', available: true, color: Color.green },
    { name: 'campera', available: false, color: Color.red },
    { name: 'sombrero', available: true, color: Color.black },
  ]

  public sortBy?: keyof Product = undefined;


  toggleUpperCase(): void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeSortBy(sortBy: keyof Product): void{
    this.sortBy = sortBy;
  }

}
