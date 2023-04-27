import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { MovieapiService } from '../movieapi.service';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit,OnDestroy,DoCheck{

  searchValue =" ";
  showDropdown= false;
  searchResults: any;
  selectedOption:string = "movie"
  loading: boolean = false

  constructor(private movieapiService: MovieapiService) {

  }

  ngOnInit(): void {
    document.addEventListener('click', this.hideDropdown);
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.hideDropdown);
  }

  ngDoCheck(): void {
   
  }

  hideDropdown = (event: MouseEvent) => {
    if (!(event.target as Element).closest('.relative')) {
      this.showDropdown = false;
    }
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  showResults() {
    this.showDropdown= false;
    this.searchResults = [];
    this.loading = true

    if (this.searchValue.length > 0 && this.selectedOption == "movie" ) {
      this.showDropdown = true
      this.movieapiService.getSearchMovies(this.searchValue).subscribe((searchterm:any) => {
        this.searchResults = searchterm.results
        this.loading = false
      })
    }

    if (this.searchValue.length > 0 && this.selectedOption == "tvshow") {
      this.showDropdown = true
      this.movieapiService.getSearchTv(this.searchValue).subscribe((searchterm:any) => {
        this.searchResults = searchterm.results
        this.loading = false
      })
    }

  }



}
