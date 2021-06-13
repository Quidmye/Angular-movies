import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../Interfaces/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private params: any

  constructor(private httpCLient: HttpClient, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(data => this.params = data)
  }

  getMovies(): Observable<any[]>{
    return this.httpCLient.get<any[]>('https://api.themoviedb.org/3/discover/movie', {
      params: {
        with_genres: this.params?.genres ?? '',
        page: this.params?.page ?? 1
      }
    })
  }

  searchMovies(): Observable<any[]>{
    return this.httpCLient.get<any[]>('https://api.themoviedb.org/3/search/movie', {
      params: {
        page: this.params?.page ?? 1,
        query: this.params?.query ?? ''
      }
    })
  }

  getById(id: number): Observable<Movie>{
    return this.httpCLient.get<Movie>('https://api.themoviedb.org/3/movie/' + id)
  }
}
