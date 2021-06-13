import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'untitled6';
  theme = 'dark';
  @Input()
  ngClass: string | string[] | Set<string> | { [klass: string]: any; }

  constructor() {
    if(localStorage.getItem('theme')){
      if(localStorage.getItem('theme') !== this.theme){
        this.toggleTheme()
      }
    }
  }
  toggleTheme(): void{
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  }
}
