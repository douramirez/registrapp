import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  nombreUsuario:BehaviorSubject<string> = new BehaviorSubject('');

  get getNombreUsuario() {
   return this.nombreUsuario.asObservable();
  }

  set setNombreUsuario(nombreUsuario:string){
     this.nombreUsuario.next(nombreUsuario);
  }
  constructor() { }
}
