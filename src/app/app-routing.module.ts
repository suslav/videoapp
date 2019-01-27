import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SongsComponent } from './songs/songs.component';
import { ShowsComponent } from './shows/shows.component';
import { ViewplanComponent } from './viewplan/viewplan.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'movies', component:MoviesComponent},
  {path:'songs', component:SongsComponent},
  {path:'shows',component:ShowsComponent},
  {path:'viewplans', component:ViewplanComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
