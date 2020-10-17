import { Component, OnInit } from '@angular/core';
import { TravelDestiny } from '../models/travel-destiny.model';

@Component({
  selector: 'app-destiny-list',
  templateUrl: './destiny-list.component.html',
  styleUrls: ['./destiny-list.component.css']
})
export class DestinyListComponent implements OnInit {
  destinies: TravelDestiny[];

  constructor() { 
    this.destinies = [];
  }

  ngOnInit() {
  }

  save(nombre: string, url: string): boolean{
    this.destinies.push(new TravelDestiny(nombre, url))
    return false
  }
}
