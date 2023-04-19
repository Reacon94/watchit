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

  getTrendingMovies() {
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=94de9bebff2637c5a55638a78563f745&language=en-US&page=1")
  }

  getTrendingSeries() {
    return this.http.get("https://api.themoviedb.org/3/tv/popular?api_key=94de9bebff2637c5a55638a78563f745&language=en-US&page=1")
  }

  
  getMoviebyID(id: any) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=94de9bebff2637c5a55638a78563f745&language=en-US`)
  }

  getVideoMovie(id: any) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=94de9bebff2637c5a55638a78563f745&language=en-US`)
  }
}
