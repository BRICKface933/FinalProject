import { Component, Input, OnInit } from '@angular/core';
import { SomeObject } from '../app.component';

@Component({
  selector: 'app-finalorder',
  templateUrl: './finalorder.component.html',
  styleUrls: ['./finalorder.component.css']
})
export class FinalorderComponent implements OnInit {
  @Input()
  items!: SomeObject
  constructor() { }

  ngOnInit(): void {
  }

}
