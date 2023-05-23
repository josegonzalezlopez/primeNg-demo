import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n select
  name: string = 'Eugenia'
  gender: 'male'|'female' = 'female';
  optionsMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeData(): void{
    this.name = 'Matias';
    this.gender = 'male';
  }

  //i18n plural
  elementList: string[] = ['Auto', 'casa', 'heladera', 'Ventilador', 'lampara', 'puerta'];
  elementsMap = {
    '=0': 'No existen elementos en la lista',
    '=1': 'Tenemos un elemento en la lista',
    'other': 'Tenemos # elementos en la lista',
  }

  retirarElemento():void {
    this.elementList.shift();
  }

  //keyValue pipe

  public product = {
    mane: 'zapatilla',
    stock: 34,
    color: 'black',
    madeIn: 'china',
  }

  //async

  public observableTimer: Observable<number> = interval(2000).pipe(
    tap((response)=> console.log(response)));

  public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Información correpondiente a la promesa');
      console.log('Información correpondiente a la promesa');
      //demostración que a pesar que la promesa no es cancelable angular no va a fallar si no encunetra el objecto product
      this.product.mane = 'Bicicleta'
    }, 4000);
  });

}


