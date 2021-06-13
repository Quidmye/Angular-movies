import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UrlBuilderService} from "../../services/url.builder.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: any[] = []
  selectedGenres: number[] = []

  @Input()
  ngClass: string | string[] | Set<string> | { [klass: string]: any; }

    constructor(private activatedRoute: ActivatedRoute, private urlBuilder: UrlBuilderService) {
    this.activatedRoute.queryParams.subscribe(data => {
      if(data.hasOwnProperty('genres')){
        this.selectedGenres = data.genres.split(',').map((value:any) => parseInt(value))
      }
    })
    this.activatedRoute.data.subscribe(data => {
        data.genres.forEach((value: string, key: number) => {
          this.genres.push({name: value, id: key});
        })
      })
  }

  ngOnInit(): void {
  }

  toggleGenre(id: number): void{
    this.urlBuilder.toggleGenreid(id);
  }

}
