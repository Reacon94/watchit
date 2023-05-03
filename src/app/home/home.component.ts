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

  
  constructor(private movieapiService: MovieapiService) {

  }

  ngOnInit(): void {
    this.movieapiService.getTrending().subscribe((trending:any) => {
      this.trending = trending.results.sort((a:any, b:any) => b.popularity - a.popularity);
    })
    this.movieapiService.getTrendingMovies().subscribe((trendingmovies:any) => {
      this.trendingmovie = trendingmovies.results.sort((a:any, b:any) => b.popularity - a.popularity);
    })
    this.movieapiService.getTrendingSeries().subscribe((trendingseries:any) => {
      this.trendingtv = trendingseries.results.sort((a:any, b:any) => b.popularity - a.popularity);
    })
    
  }
  
  ngDoCheck(): void {

  }


  carouselmain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next right-0 w-12">Works</button>',
    //autoplay: true
  };

  carouselConfig = {
    slidesToShow: 10,
    slidesToScroll: 4,
    nextArrow: '<button type="button" class="slick-next right-0">Works</button>',
  };

}
