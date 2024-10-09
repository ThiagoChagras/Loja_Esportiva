import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
@Component({
  selector: 'app-esqueci',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './esqueci.component.html',
  styleUrl: './esqueci.component.css'
})
export class EsqueciComponent {
  public mensagem: String = "";
  public obj : Cliente = new Cliente();

  public reenviar(){
    this.mensagem="As instruções foram enviadas para o E-mail:"
    + this.obj.email;
  }
}
