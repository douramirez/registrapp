import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public personaje: any;
  nombreUsuario: string = ''


  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getCharacters().subscribe(
      (data) => {
      console.log(data);
      this.personaje = data.users;
      localStorage.setItem('Personaje', JSON.stringify(data.users));
    });
  }
  }




