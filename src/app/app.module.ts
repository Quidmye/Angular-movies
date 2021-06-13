import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BlockHeaderComponent} from './components/block-header/block-header.component';
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MoviesInterceptor} from "./modules/movies/services/movies.interceptor";
import {GenresResolver} from "./modules/movies/services/genres.resolver";
import {UrlBuilderService} from "./modules/movies/services/url.builder.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BlockHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        resolve: {
          genres: GenresResolver
        },
        children: [
          {
            path: '', loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)
          }
        ]
      },

    ])
  ],
  providers: [
    UrlBuilderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MoviesInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
