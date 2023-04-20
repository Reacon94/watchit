import { Component,OnInit, DoCheck } from '@angular/core';
import { MovieapiService } from '../movieapi.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck {
  trending: any
  trendingmovie: any
  trendingtv: any
  indexmovies?: number = 1
  indextv?: number = 1


  
  constructor(private movieapiService: MovieapiService) {

  }

  ngOnInit(): void {
    this.movieapiService.getTrending().subscribe((trending:any) => {
      this.trending = trending.results;
    })
    this.movieapiService.getTrendingMovies().subscribe((trendingmovies:any) => {
      this.trendingmovie = trendingmovies.results;
    })
    this.movieapiService.getTrendingSeries().subscribe((trendingseries:any) => {
      this.trendingtv = trendingseries.results;
    })
    
  }
  
  ngDoCheck(): void {
    
  }

  prevbtn(name: string) {
    if(name === 'movie') {
      this.indexmovies = 1;
    }

    if(name === 'tv') {
      this.indextv = 1;
    }

   
  }

  nextbtn(name: string){

    if(name === 'movie') {
      this.indexmovies = 2;
    }

    if(name === 'tv') {
      this.indextv = 2;
    }
     
  }

}
