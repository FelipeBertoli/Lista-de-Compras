import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  variavel = ' ';
  lista = [{ codigo: 1, nome: 'Batata', feito: false },
  { codigo: 2, nome: 'Cebola', feito: false },
  { codigo: 3, nome: 'Tomate', feito: false }];


  criarCodigo() {
    var aux = 0;
    this.lista.forEach(function (valor) {
      if (valor.codigo > aux) aux = valor.codigo;
      console.log(aux);
    });
    aux = aux + 1
    return aux
  }

  adicionar() {

    this.lista.push({ codigo: this.criarCodigo(), nome: this.variavel, feito: false });
  }
  remover(codigo) {
    this.lista.splice(0,1);
  }
  constructor() { }
}
