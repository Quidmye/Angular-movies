import {ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UrlBuilderService} from "../../services/url.builder.service";

@Component({
  selector: 'app-movie-short',
  templateUrl: './movie-short.component.html',
  styleUrls: ['./movie-short.component.css']
})
export class MovieShortComponent implements OnInit, OnChanges {

  title: string
  overview: string
  poster: string
  genre_ids: number[]
  genre_names: string[]
  genres: any

  @Input()
  movie: any;

  constructor(private activatedRoute: ActivatedRoute, private ref: ChangeDetectorRef) {
    this.activatedRoute.data.subscribe(data => this.genres = data.genres)
  }

  ngOnInit(): void {
    ({title: this.title, genre_ids: this.genre_ids, overview: this.overview, poster_path: this.poster} = this.movie)
    this.genre_names = this.genre_ids.map(value => this.genres.get(value))
  }

  ngOnChanges() {
    this.ref.detectChanges();
  }

}
