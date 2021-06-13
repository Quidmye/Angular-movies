import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-block-header',
  templateUrl: './block-header.component.html',
  styleUrls: ['./block-header.component.css']
})
export class BlockHeaderComponent implements OnInit {

  @Output() toggleTheme = new EventEmitter<string>();
  @Input() theme: string
  search = new FormGroup({
    query: new FormControl()
  })

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  toggleThemeEmit(): void{
    this.toggleTheme.emit();
  }

  onSubmit(): void{
    console.log(this.search.value);
    this.router.navigate(['/search'], {queryParams: {...this.search.value, page: 1}})
  }

}
