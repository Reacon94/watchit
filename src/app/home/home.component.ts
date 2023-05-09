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
  loaded? : boolean

  
  constructor(private movieapiService: MovieapiService) {

  }

  ngOnInit(): void {
    this.loaded = false
    this.movieapiService.getTrending().subscribe((trending:any) => {
      this.trending = trending.results.sort((a:any, b:any) => b.popularity - a.popularity);
    })
    this.movieapiService.getTrendingMovies().subscribe((trendingmovies:any) => {
      this.loaded = false
      this.trendingmovie = trendingmovies.results.sort((a:any, b:any) => b.popularity - a.popularity);
      this.loaded = true
    })
    this.movieapiService.getTrendingSeries().subscribe((trendingseries:any) => {
      this.loaded = false
      this.trendingtv = trendingseries.results.sort((a:any, b:any) => b.popularity - a.popularity);
      this.loaded = true
    })
    
  }
  
  ngDoCheck(): void {

  }


  carouselmain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next right-0 w-12"></button>',
    autoplay: true,
  };

  carouselConfig = {
    slidesToShow: 10,
    slidesToScroll: 4,
    nextArrow: '<button type="button" class="slick-next right-0"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

}
