import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GenresResolver implements Resolve<boolean> {

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.httpClient.get<any>('https://api.themoviedb.org/3/genre/movie/list').pipe(map(value => {
      let genres: any = new Map();
      for (let genre of value.genres){
        genres.set(genre.id, genre.name);
      }
      return genres;
    }))
  }
}
