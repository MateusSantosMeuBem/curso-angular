import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  randomNumber(): number{
    return Math.floor(Math.random()*100);
  }

  number = this.randomNumber()

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(): void{
    this.number = this.randomNumber()
  }

}
