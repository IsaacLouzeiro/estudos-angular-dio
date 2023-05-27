import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  produtos: string[] = []
  item: string = '';
  menuType: string = ''

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ]
  }

  ngOnInit(): void {
  }

  adicionar() {
    this.produtos.push(this.item)
  }

  excluir() {
    this.produtos.pop()
  }

  remover(index: number) {
    this.produtos.splice(index, 1)
  }

}
