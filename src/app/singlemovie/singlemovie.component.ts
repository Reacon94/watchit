import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { MovieapiService } from '../movieapi.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.css']
})
export class SinglemovieComponent implements OnInit,DoCheck {
  currentID: any 
  actualmovie?: any
  actualvideo?: any
  videokey: any


    constructor(
      private route: ActivatedRoute, 
      private http: HttpClient,
      private moviedb: MovieapiService
      ) {

    }

ngOnInit(): void {
  
  this.route.params.subscribe(params => {
    this.currentID = params["id"]
  })

  this.moviedb.getMoviebyID(this.currentID).subscribe((actualmovie:any) => {
    this.actualmovie = actualmovie
  })

  this.moviedb.getVideoMovie(this.currentID)
  .subscribe((actualvideo:any) => {
    actualvideo.results.map((x:any) => {
        if(x.name == "Official Trailer") {
          this.videokey =  x.key
        }
    })
    this.actualvideo = actualvideo
  })

}

goToLink() {
  window.open(`https://www.youtube.com/watch?v=${this.videokey}`)
}

ngDoCheck(): void {
 
}

}
