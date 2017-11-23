import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AmbienteComprasPage } from '../ambiente-compras/ambiente-compras';
import { ListaProdutosComponent } from '../listaProdutos/lista-produtos.component';
import { HistoricoPage } from '../historico/historico';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage implements OnInit {


	public menu_inicial = [];

	public itemDoMenu = [];

	public menuR: string;


	constructor(public navCtrl: NavController) {

		this.menu_inicial = [
			{ componenteMenu: AmbienteComprasPage, nomeMenu: 'Nova Compra', descricaoMenu: 'Vamos a Feira', iconeIos: 'ios-cart', iconeMd: 'md-cart' },
			{ componenteMenu: ListaProdutosComponent, nomeMenu: 'Adicionar produtos', descricaoMenu: 'Adicione produtos a lista', iconeIos: 'ios-folder', iconeMd: 'md-folder' },
			{ componenteMenu: HistoricoPage, nomeMenu: 'Historico de Compras', descricaoMenu: 'Veja as antigas compras', iconeIos: 'ios-paper', iconeMd: 'md-paper' }
		];

		// for(let i = 0 ; i < this.menu_inicial.length; i++){

		//     this.itemDoMenu.push(this.menu_inicial[i].nomeMenu);

		// }
		// console.log(this.itemDoMenu);


	}


	ngOnInit() {

	}

	menuSelecionado(componenteR): void {

		this.navCtrl.push(componenteR);

	}

}




