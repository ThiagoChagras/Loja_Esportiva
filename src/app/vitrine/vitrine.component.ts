import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {

  public lista: Produto[] = [
    {codigo: 1, nome: "Camisa do São Paulo", descritivo:"Camisa de campo do São Paulo", valor: 200.00, quantidade: 20, keywords: "SPFC"},
    {codigo: 2, nome: "Camisa do Corinthians", descritivo:"Camisa oficial do Corinthians", valor: 150.00, quantidade: 15, keywords: "Corinthians"},
    {codigo: 3, nome: "Camisa do Palmeiras", descritivo:"Camisa oficial do Palmeiras", valor: 100.00, quantidade: 30, keywords: "Palmeiras"},
    {codigo: 4, nome: "Camisa do Flamengo", descritivo:"Camisa oficial do Flamengo", valor: 150.00, quantidade: 50, keywords: "Flamengo"},
    {codigo: 5, nome: "Camisa do Fluminense", descritivo:"Camisa oficial do Fluminense", valor: 200.00, quantidade: 20, keywords: "Fluminense"},
    {codigo: 6, nome: "Camisa do Grêmio", descritivo:"Camisa oficial do Grêmio", valor: 190.00, quantidade: 30, keywords: "Grêmio"},
    {codigo: 7, nome: "Camisa do Internacional", descritivo:"Camisa oficial do Internacional", valor: 180.00, quantidade: 25, keywords: "Internacional"},
    {codigo: 8, nome: "Camisa do Botafogo", descritivo:"Camisa oficial do Botafogo", valor: 170.00, quantidade: 20, keywords: "Botafogo"},
    {codigo: 9, nome: "Camisa do Vasco", descritivo:"Camisa oficial do Vasco", valor: 160.00, quantidade: 20, keywords: "Vasco"},
    {codigo: 10, nome: "Camisa do Cruzeiro", descritivo:"Camisa oficial do Cruzeiro", valor: 150.00, quantidade: 25, keywords: "Cruzeiro"},
    {codigo: 11, nome: "Camisa do Athletico Paranaense", descritivo:"Camisa oficial do Athletico", valor: 180.00, quantidade: 20, keywords: "Athletico Paranaense"},
    {codigo: 12, nome: "Camisa do Fortaleza", descritivo:"Camisa oficial do Fortaleza", valor: 150.00, quantidade: 20, keywords: "Fortaleza"},
    {codigo: 13, nome: "Camisa do Bahia", descritivo:"Camisa oficial do Bahia", valor: 150.00, quantidade: 20, keywords: "Bahia"},
    {codigo: 14, nome: "Camisa do Vitória", descritivo:"Camisa oficial do Vitória", valor: 140.00, quantidade: 15, keywords: "Vitória"},
    {codigo: 15, nome: "Camisa do Santos", descritivo:"Camisa oficial do Santos", valor: 160.00, quantidade: 15, keywords: "Santos"},
    {codigo: 16, nome: "Camisa do Cuiabá", descritivo:"Camisa oficial do Cuiabá", valor: 120.00, quantidade: 10, keywords: "Cuiabá"},
    {codigo: 17, nome: "Camisa do Atlético Goianiense", descritivo:"Camisa oficial do Atlético Goianiense", valor: 140.00, quantidade: 15, keywords: "Atlético Goianiense"},
    {codigo: 18, nome: "Camisa do RB Bragantino", descritivo:"Camisa oficial do RB Bragantino", valor: 150.00, quantidade: 15, keywords: "RB Bragantino"},
    {codigo: 19, nome: "Camisa do Criciúma", descritivo:"Camisa oficial do Criciúma", valor: 130.00, quantidade: 15, keywords: "Criciúma"},
    {codigo: 20, nome: "Camisa do Atlético Mineiro", descritivo:"Camisa oficial do Atlético Mineiro", valor: 200.00, quantidade: 25, keywords: "Atlético Mineiro"},
    {codigo: 21, nome: "Camisa do Juventude", descritivo:"Camisa oficial do Juventude", valor: 130.00, quantidade: 15, keywords: "Juventude"}
];
  public mensagem: string = "Bem vindo sofredores";

  constructor(private router: Router) {}

  public abrirDetalhe(item: Produto) {
  localStorage.setItem("produto", JSON.stringify(item));
  this.router.navigate(['/detalhe']);
  }

  public verDetalhe(item:Produto){
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href = "./detalhe";
  }

  public adicionarItem(obj:Produto){
      let json = localStorage.getItem("cesta");
      let jsonCliente = localStorage.getItem("cliente");
      let cesta: Cesta = new Cesta();
      let item: Item = new Item();
      if(json==null){      //CESTA NAO EXISTE
          item.codigo=obj.codigo;
          item.produto=obj;
          item.quantidade=1;
          item.valor= obj.valor;
          cesta.codigo = 1;
          cesta.total = obj.valor;
          cesta.itens.push(item);
          if(jsonCliente!=null) cesta.cliente = JSON.parse(jsonCliente);
      } else {  //CESTA EXISTE
        let achou = false;
        cesta = JSON.parse(json);
        for(let i=0; i<cesta.itens.length; i++){
          if(cesta.itens[i].codigo==obj.codigo){  //ITEM JA EXISTE
            cesta.itens[i].quantidade = cesta.itens[i].quantidade + 1;
            cesta.itens[i].valor =  cesta.itens[i].quantidade * cesta.itens[i].produto.valor;
            achou = true;
            break;
          }
        }
        if(!achou){  //ITEM NAO EXISTE
          item.codigo=obj.codigo;
          item.produto=obj;
          item.quantidade=1;
          item.valor= obj.valor;
          cesta.itens.push(item);
        }
      }

      cesta.total = 0; //ATUALIZA O VALOR TOTAL DA CESTA
      for(let i=0; i<cesta.itens.length; i++){
        cesta.total= cesta.itens[i].valor + cesta.total;
      }

      localStorage.setItem("cesta", JSON.stringify(cesta));
      window.location.href = "./cesta";
  }

}
