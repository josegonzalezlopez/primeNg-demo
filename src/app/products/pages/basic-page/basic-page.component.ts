import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public textLower: string = 'LOREM IPSUM DOLOR SIT AMET';
  public textUper: string = 'Lorem ipsum dolor sit amet';
  public textTitle: string = 'LorEm ipSum dOlOr sit AmeT';

  public customDate: Date = new Date();

}
