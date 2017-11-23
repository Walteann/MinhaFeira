import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ListaMercadoriaModels } from '../../modals/lista-mercadoria.models';


@Component({
	selector: 'page-ambiente-compras',
	templateUrl: 'ambiente-compras.html',
})
export class AmbienteComprasPage implements OnInit {

	public listaDeMercadorias: ListaMercadoriaModels[];

    public precoTotal;
    public Total: number;

	constructor(public navCtrl: NavController, public navParams: NavParams,

		private _alertCtrl: AlertController) {


		}

		ionViewDidLoad() {
			console.log('ionViewDidLoad AmbienteComprasPage');
		}



		ngOnInit() {
			this.listaDeMercadorias = [

				// {
				// 	mercadoria: 'Feijao',
				// 	qtd: 2,
				// 	precoUni: 1.00
				// },
				// {
				// 	mercadoria: 'Arroz',
				// 	qtd: 2,
				// 	precoUni: 3.00
				// },
				// {
				// 	mercadoria: 'Macarrao',
				// 	qtd: 5,
				// 	precoUni: 1.25
				// },
			];

            this.precoTotal = 0.0;
            this.Total = 0.0;
		this.realizaCalculo();
	}


	alertProduto() {
		var alert = this._alertCtrl.create({
			title: 'Adicionar Compra',
			inputs: [
				{
					name: 'mercadoria',
					placeholder: 'Produto',
					type: 'text'
				},
				{
					name: 'qtd',
					placeholder: 'quantidade',
					type: 'number'
				},
				{
					name: 'precoUni',
					placeholder: 'preco',
					type: 'number'
				}

			],
			buttons: [
				{
					text: 'Cancelar',
					role: 'cancelar',
					handler: data => {
						console.log('Cancelar foi clicked');
					}
				},
				{
					text: 'Adicionar',
					role: 'adicionar',
					handler: data => {
						this.listaDeMercadorias.push(data);
						this.precoTotal = 0;
						this.realizaCalculo();
					}


				}

			]
		});
		alert.present();
	}

	addProduto() {
		this.alertProduto();
	}

	realizaCalculo() {

		for (let i = 0; i < this.listaDeMercadorias.length; i++) {
			this.precoTotal += (this.listaDeMercadorias[i].precoUni * this.listaDeMercadorias[i].qtd);
		}
		this.Total = this.precoTotal.toFixed(2);
	}

}
