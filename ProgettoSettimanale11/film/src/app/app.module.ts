import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { Error404Component } from './components/error404/error404.component';
import { FavoritiesComponent } from './components/favorities/favorities.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ListaUtentiComponent } from './components/lista-utenti/lista-utenti.component';


const rotte: Route[] = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent,
      children: [
          {
              path: 'login',
              component: LoginComponent
          }
      ]
  },
  {
      path: 'movies',
      component: MoviesComponent
  },
  {
      path: 'profile',
      component: ProfileComponent,
      children: [
          {
              path: 'details',
              component: DetailsComponent
          },
          {
              path: 'favorites',
              component: FavoritiesComponent
          }
      ]
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'register',
      component: RegisterComponent
  },
  {
      path: '**',
      component: Error404Component
  }
]


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    Error404Component,
    FavoritiesComponent,
    HomeComponent,
    MoviesComponent,
    NavbarComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    MovieDetailsComponent,
    ListaUtentiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
