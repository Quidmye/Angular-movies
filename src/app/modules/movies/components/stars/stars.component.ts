import {ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {UrlBuilderService} from "../../services/url.builder.service";

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input() movieId?: number|string
  @Input()
  ngClass: string | string[] | Set<string> | { [klass: string]: any; }

  currentRating: number = 0;
  stars: number[] = [5, 4, 3, 2, 1]

  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.currentRating = parseInt(<string>localStorage.getItem('rating-' + this.movieId)) ?? 0;
    this.ref.detectChanges();
  }

  setRating(rating: number){
    this.currentRating = rating;
    localStorage.setItem('rating-' + this.movieId, String(rating))
  }
}
