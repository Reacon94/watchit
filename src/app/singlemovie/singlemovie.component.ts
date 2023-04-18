import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.css']
})
export class SinglemovieComponent implements OnInit,DoCheck {
  currentID: any 
  actualmovie: any
  actualvideo: any


    constructor(
      private route: ActivatedRoute, 
      private http: HttpClient
      ) {

    }

ngOnInit(): void {
  
  this.route.params.subscribe(params => {
    this.currentID = params["id"]
  })

  this.getMoviebyID().subscribe((id:any) => {
    this.actualmovie = id
  })
}

ngDoCheck(): void {
 
}



getMoviebyID() {
  return this.http.get(`https://api.themoviedb.org/3/movie/${this.currentID}?api_key=94de9bebff2637c5a55638a78563f745&language=en-US`)
 
}

}
