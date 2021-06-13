import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies: any[]
  page: number
  total_pages: number

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
    this.activatedRoute.queryParams.subscribe(data => {
      this.moviesService.searchMovies().subscribe(data => {
        this.movies = data.results
        this.page = data.page
        this.total_pages = data.total_pages
        console.log(data);
      })
    })
  }

  ngOnInit(): void {
  }

}
