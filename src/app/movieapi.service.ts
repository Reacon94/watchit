import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieapiService {

  constructor(private http: HttpClient) { 
  }
  getTrending() {
    return this.http.get("https://api.themoviedb.org/3/trending/all/day?api_key=94de9bebff2637c5a55638a78563f745");
  }
}
