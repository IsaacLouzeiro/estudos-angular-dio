import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

	@Input() nome: string = ''

  constructor() {
		console.log(`Construtor ${this.nome}`)
	}

	ngOnInit(): void {
		this.nome = this.nome + "x"
		console.log(`OnInit ${this.nome}`)
	}

	ngOnChanges(): void {
		console.log(`Onchanges ${this.nome}`)
	}
}
