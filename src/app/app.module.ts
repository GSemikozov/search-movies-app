import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MoviesComponent } from './components/movies/movies.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from "@angular/material/chips";
import { MatRippleModule } from '@angular/material/core';
import { NavComponent } from './components/nav/nav.component';
import { CardComponent } from './components/card/card.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MoviesService } from './store/services/movies.service';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffect } from './store/effects/movies.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesSearchParamService } from './store/services/movies-search-param.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {HttpRequestInterceptor} from './interceptor/http-request-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MoviesComponent,
    CardComponent,
    SearchFormComponent,
    MovieDetailsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    EffectsModule.forRoot([MoviesEffect]),
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    MoviesService,
    MoviesSearchParamService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
