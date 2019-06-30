import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  private apiUrl = 'http://localhost:3000/festivals';

  constructor(private http: HttpClient) { }

  getFestivalData() {
    return this.http.get(this.apiUrl);
  }
}
