import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieapiService } from '../movieapi.service';


@Component({
  selector: 'app-singletvcomponent',
  templateUrl: './singletvcomponent.component.html',
  styleUrls: ['./singletvcomponent.component.css']
})
export class SingletvcomponentComponent implements OnInit,DoCheck {
  currentID: any 
  actualmovie?: any
  videokey: any
  providers: any
  showBuy:boolean = false
  showRent:boolean = false
  showFlatrate:boolean = false
  


    constructor(
      private route: ActivatedRoute, 
      private moviedb: MovieapiService,
      private router: Router
      ) {

    }

ngOnInit(): void {

  this.route.params.subscribe(params => {
    this.currentID = params["id"]
    this.moviedb.getTvById(this.currentID).subscribe((actualmovie:any) => {
      this.actualmovie = actualmovie
    })
    
    this.moviedb.getVideoTv(this.currentID)
    .subscribe((actualvideo:any) => {
      actualvideo.results.map((x:any) => {
        if(x.type == "Trailer"){
          this.videokey = x.key
        }
      })
    })
  
    this.moviedb.getTvProvidersGermany(this.currentID).subscribe((providers:any) => {
      if(providers.results.DE == undefined) {
        this.providers = "No Providers"
      }
      else {
        this.providers = providers.results.DE
      }
    })
  })




}

ngOnDestroy(): void {
 
}

goToLink() {
  if(this.videokey != undefined) {
    window.open(`https://www.youtube.com/watch?v=${this.videokey}`)
  }

  else {
    this.router.navigate(["/novideofound"])
  }
}

ngDoCheck(): void {
 
}

}
