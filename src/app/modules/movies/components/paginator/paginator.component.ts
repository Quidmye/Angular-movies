import {ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {UrlBuilderService} from "../../services/url.builder.service";
import {ActivatedRoute} from "@angular/router";
import {async} from "rxjs";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() page: any
  @Input() total: any
  @Input()
  ngClass: string | string[] | Set<string> | { [klass: string]: any; }
  list: number[] = [];


  constructor(private activatedRoute: ActivatedRoute, private urlBuilder: UrlBuilderService,private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  setPage(page:number): void{
    this.urlBuilder.setPage(page)
  }

  ngOnChanges(): void{
    let list: number[] = []
    for (let i = this.page-1; i >= this.page - 3; i--){
      if(i >= 1){
        list.push(i);
      }
    }
    list.push(this.page)
    for (let i = this.page +1; i <= this.page +3; i++){
      if(i < this.total){
        list.push(i);
      }
    }
    this.list = list;
    this.ref.detectChanges();
  }

}
