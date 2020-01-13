import { Injectable } from '@angular/core';
import { Pelicula } from 'src/domain/pelicula';

@Injectable({
  providedIn: 'root'
})
export class StubPeliculaService {

  peliculas: Array<Pelicula> = [new Pelicula(1, "El caballero de la noche", 2008, 8, "Accion", "../assets/img/dark-knight.jpg"),
  new Pelicula(2, "Matrix", 2001, 9.4, "Ciencia ficcion", "../assets/img/the_matrix-155050517-large.jpg"),
  new Pelicula(3, "Toy Story", 1996, 8.9, "Animacion", "../assets/img/toy-story.jpg"),
  new Pelicula(4, "Nueve Reinas", 2000, 8.6, "Drama", "../assets/img/nueve-reinas.jpg"),
  new Pelicula(5, "Joker", 2019, 8.1, "Drama", "../assets/img/joker.jfif")]

  constructor() { }

  getPeliculas() {
    return this.peliculas
  }

}
