import { Component, OnInit, DoCheck } from '@angular/core';
import { MovieapiService } from '../movieapi.service';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit,DoCheck{

  searchValue =" ";
  showDropdown= false;
  searchResults: any;

  constructor(private movieapiService: MovieapiService) {

  }

  ngOnInit(): void {
   
  }

  ngDoCheck(): void {
    console.log(this.searchResults,"searchresults")
  }

  showResults() {
    this.showDropdown= false;
    this.searchResults = [];

    if (this.searchValue.length > 0 ) {
      this.showDropdown = true
      this.movieapiService.getSearch(this.searchValue).subscribe((searchterm:any) => {
        this.searchResults = searchterm.results
      })
    }

  }



}
