import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

export interface SomeObject{
  avto: String,
  wrkType: String,
  price: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  car_avto!: String
  car_wrk!: String
  car_price!: number

  title = 'FinalProject';

  items: SomeObject[] = []

  wrkPush(){
    if(this.car_avto && this.car_wrk && this.car_price !== undefined){
    this.items.push({avto: this.car_avto, wrkType: this.car_wrk, price: this.car_price})
    console.log(this.items)}
  }
}
