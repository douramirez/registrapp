// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage implements OnInit {

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     fetch('https://dummyjson.com/users')
//       .then(res => res.json())
//       .then(console.log);
//   }
  
// }


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
}

