import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SinglemovieComponent } from './singlemovie/singlemovie.component';
import { SingletvcomponentComponent } from './singletvcomponent/singletvcomponent.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "movies",
    component: MoviesComponent
  },
  {
    path: "series",
    component: SeriesComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "movies/:id",
    component:SinglemovieComponent
  },
  {
    path: "tvshow/:id",
    component: SingletvcomponentComponent
  },
  {
    path: "**",
    component: NotfoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
