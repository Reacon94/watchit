import { Component,OnInit, DoCheck } from '@angular/core';
import { MovieapiService } from '../movieapi.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck {
  movies: any
  postersrc?: any
  constructor(private movieapiService: MovieapiService) {

  }

  ngOnInit(): void {
    this.movieapiService.getTrending().subscribe((movies:any) => {
      this.movies = movies.results;
    }
     
     
     )
    
  }
  
  ngDoCheck(): void {

    console.log(this.movies?.map((x:any) => {
       return x
         }))
  }

}
