import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';


interface user{
  name:string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public personajes: any;
  nombreUsuario: string = ''


  constructor(private api: ApiService, private stateService: StateService, private router: Router) {
    this.stateService.getNombreUsuario.subscribe((nombreUsuario) => {
      this.nombreUsuario = nombreUsuario;
    })
  }

  ngOnInit() {
    const fotos = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg']; 
    const personajes = localStorage.getItem('personajes');
    if (personajes) {
      this.personajes = JSON.parse(personajes);
    } else {
      this.api.getCharacters().subscribe((res: any) => {
        this.personajes = res.map((user: any, index: number) => {
          return {
            ...user,
            status: 'Presente',
            photo: fotos[index % fotos.length] 
          };
        });
        localStorage.setItem('personajes', JSON.stringify(this.personajes));
      });
    }
  }
  }




