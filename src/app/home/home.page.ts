import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
public personajes: any;
nombreUsuario: string = ''
  

constructor(private api: ApiService, private stateService:StateService, private router: Router) {
  this.stateService.getNombreUsuario.subscribe((nombreUsuario)=>{
    this.nombreUsuario = nombreUsuario;
  })
}

  ngOnInit() {
    this.api.getCharacters().subscribe((res:any) =>{
      console.log(res);
      this.personajes = res.users;
    });

  }


  

   
}



