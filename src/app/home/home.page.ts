import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string = '';
  contrasenia: number | null = null;
  constructor(
    private router:Router) {}
  guardar(){
    // this.sharedData.usuario = this.usuario;
    // this.usuario =this.compartirDatosService.usuario;
    this.router.navigateByUrl("login/" + this.usuario);
  }
}
