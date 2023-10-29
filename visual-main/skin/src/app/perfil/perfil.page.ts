import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public alertContrller: AlertController, public router: Router) { }

  ngOnInit() {
  }

  async logout() {
    // Eliminar la información de inicio de sesión del almacenamiento local
    localStorage.removeItem('ingresado');
  
    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/login']); // Ajusta la ruta según tu estructura de rutas
  }
  }
    
