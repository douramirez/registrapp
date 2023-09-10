import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit() {
    if (this.nombreUsuario == "") {
      this.router.navigate(['/login'])
    }
    
  }
  nombreUsuario: string = ''

  constructor(private stateService:StateService, private router: Router) {
    this.stateService.getNombreUsuario.subscribe((nombreUsuario)=>{
      this.nombreUsuario = nombreUsuario;
    })

  }

  private home = [
    {
      id: '1',
      titulo: 'Thomas Foncea',
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-bdyxh&psig=AOvVaw0-QuY7YdNjkaq5GafwzUFP&ust=1694404126553000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjzibKRn4EDFQAAAAAdAAAAABAE",
      rut: '11111111-8'
    },
    {
      id: '2',
      titulo: 'Alessandro Rojas',
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-bdyxh&psig=AOvVaw0-QuY7YdNjkaq5GafwzUFP&ust=1694404126553000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjzibKRn4EDFQAAAAAdAAAAABAE",
      rut: '22222222-8'
    },

    {
      id: '3',
      titulo: 'Yeremias Venegas',
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-bdyxh&psig=AOvVaw0-QuY7YdNjkaq5GafwzUFP&ust=1694404126553000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjzibKRn4EDFQAAAAAdAAAAABAE",
      rut: '33333333-8'
    },

    {
      id: '4',
      titulo: 'Juan Perez',
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-bdyxh&psig=AOvVaw0-QuY7YdNjkaq5GafwzUFP&ust=1694404126553000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjzibKRn4EDFQAAAAAdAAAAABAE",
      rut: '44444444-8'
    },

    {
      id: '5',
      titulo: 'Luis Sandoval',
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-bdyxh&psig=AOvVaw0-QuY7YdNjkaq5GafwzUFP&ust=1694404126553000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjzibKRn4EDFQAAAAAdAAAAABAE",
      rut: '55555555-8'
    },
  ]

}

