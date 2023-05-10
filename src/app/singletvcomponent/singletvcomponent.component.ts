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
  videokey: any
  actualtv: any
  providers: any
  showBuy:boolean = false
  showRent:boolean = false
  showFlatrate:boolean = false

  constructor(  private route: ActivatedRoute, 
    private moviedb: MovieapiService,
    private router: Router
    ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.currentID = params["id"]
    this.moviedb.getTvById(this.currentID).subscribe((actualtv:any) => {
      this.actualtv = actualtv
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
      this.providers = providers.results.DE
    })

    }) 

  }

  ngDoCheck(): void {
    
    console.log(this.providers)
  }

  goToLink() {
    if(this.videokey != undefined) {
      window.open(`https://www.youtube.com/watch?v=${this.videokey}`)
    }

    else {
      this.router.navigate(["/novideofound"])
    }
   
  }
  

}
