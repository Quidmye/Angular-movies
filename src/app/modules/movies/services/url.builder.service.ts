import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UrlBuilderService{

  private params: any = {};

  constructor(private activatedRoute:ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(data => this.params = data)
  }

  getParams(): any{
    return {...this.params}
  }

  setPage(page:number):void{
    this.params = {...this.params, page: page}
    this.rebuildUrl()
  }

  toggleGenreid(id: number): void{
    this.setPage(1);
    if(this.params.hasOwnProperty('genres')){
      let genres = this.params.genres.split(',').map((value:any) => parseInt(value)).filter((value:any) => !isNaN(value));
      if(genres.includes(id)){
        let index = genres.indexOf(id);
        genres.splice(index, 1);
        if(genres.lenght === 0){
          delete this.params.genres
        }else{
          this.params = {...this.params, genres: genres.join(',')}
        }
      }else{
        genres.push(id);
        this.params = {...this.params, genres: genres.join(',')}
      }
    }else{
      this.params = {...this.params, genres: id}
    }
    this.rebuildUrl()
  }

  protected rebuildUrl(): void{
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: this.params,
        queryParamsHandling: "merge",
      });
  }

}
