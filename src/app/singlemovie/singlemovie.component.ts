import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieapiService } from '../movieapi.service';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.css']
})
export class SinglemovieComponent implements OnInit,DoCheck,OnDestroy {
  currentID: any 
  actualmovie?: any
  actualvideo?: any
  videokey: any
  providers: any
  showBuy:boolean = false
  showRent:boolean = false
  


    constructor(
      private route: ActivatedRoute, 
      private moviedb: MovieapiService
      ) {

    }

ngOnInit(): void {

  this.route.params.subscribe(params => {
    this.currentID = params["id"]
    this.moviedb.getMoviebyID(this.currentID).subscribe((actualmovie:any) => {
      this.actualmovie = actualmovie
    })
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

  this.moviedb.getMovieProvidersGermany(this.currentID).subscribe((providers:any) => {
    this.providers = providers.results.DE
  })
}

ngOnDestroy(): void {
 
}

goToLink() {
  window.open(`https://www.youtube.com/watch?v=${this.videokey}`)
}

ngDoCheck(): void {
}

}
