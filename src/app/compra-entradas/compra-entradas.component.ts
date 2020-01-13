import { Component, OnInit } from '@angular/core';
import { StubPeliculaService } from 'src/services/pelicula.service';
import { Pelicula } from 'src/domain/pelicula';

@Component({
  selector: 'app-compra-entradas',
  templateUrl: './compra-entradas.component.html',
  styleUrls: ['./compra-entradas.component.css']
})
export class CompraEntradasComponent implements OnInit {

  peliculas: Array<Pelicula>

  constructor(private peliculaService: StubPeliculaService) { }

  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas()
    console.log(this.peliculas)
  }

}

