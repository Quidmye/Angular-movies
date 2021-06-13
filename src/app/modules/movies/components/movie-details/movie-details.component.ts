import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../../Interfaces/movie";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie

  constructor(private movieService: MoviesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
      this.movieService.getById(data.id).subscribe(response => {
        this.movie = response
        console.log(response)
      })
    })
  }

  ngOnInit(): void {
  }

}
