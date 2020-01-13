import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/domain/pelicula';

@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.css']
})
export class CardPeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula

  constructor() { }

  ngOnInit() {
  }

}
