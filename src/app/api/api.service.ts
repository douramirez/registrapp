
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any>{
    return this.http.get('https://dummyjson.com/users');
  }
  getCharacter(id: number): Observable<any>{
    return this.http.get(`https://dummyjson.com/user/${id}`);
}

}