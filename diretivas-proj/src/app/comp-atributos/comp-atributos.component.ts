import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.scss']
})
export class CompAtributosComponent implements OnInit {
  estilo: string = 'enable'
  corFundo: string = 'blue'
  corFonte: string = 'yellow'
  item: string = ''
  lista: string[] = []
  isEnableBlock: boolean = true

  constructor() { }

  adicionarLista() {
    this.lista.push(this.item)
  }

  ngOnInit(): void {
  }

  mudarCor() {
    if(this.estilo === 'enable') {
      this.estilo = 'disable'
    }
    else {
      this.estilo = 'enable'
    }
  }

}
