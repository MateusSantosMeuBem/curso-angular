import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {'name': 'Turca', 'type': 'Dog', 'age': 4},
    {'name': 'Tom', 'type': 'Cat', 'age': 8},
    {'name': 'Frida', 'type': 'Dog', 'age': 6},
    {'name': 'Bob', 'type': 'Horse', 'age': 7},
  ]

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  removeAnimal(animal: Animal){
    console.log('Removing animal...')
    this.animals = this.listService.remove(this.animals, animal);
  }

}
