import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {
adicionarItem(arg0: Produto) {
throw new Error('Method not implemented.');
}
  public mensagem: String = "";
  public item: Produto = new Produto();
  constructor(){
    let json = localStorage.getItem("produto");
    if(json!=null){
      this.item = JSON.parse(json);
    } else {
      this.mensagem = "produto não encontrado !";
    }
  }
}
