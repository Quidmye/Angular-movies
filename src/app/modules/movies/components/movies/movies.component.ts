import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../Interfaces/movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[]
  total_pages: number
  page: number

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  )
  {
    this.activatedRoute.queryParams.subscribe(data => {
      this.moviesService.getMovies().subscribe(data => {
        this.total_pages = data.total_pages
        this.page = data.page
        this.movies = data.results

        console.log(this.movies, this.page, this.total_pages);
      })
    })
  }

  ngOnInit(): void {
  }


}
