import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { IHistoricoComprasModels } from '../../modals/historico-compras.models';

import { Observable } from 'rxjs/Observable';

import { ComprasHistoricoServiceProvider } from '../../providers/compras-historico-service/compras-historico-service';
@Component({

	templateUrl: 'historico.html',
})
export class HistoricoPage implements OnInit {

	public historicoHash: IHistoricoComprasModels[];



	constructor(public navCtrl: NavController, 
		private _historicoService: ComprasHistoricoServiceProvider,
		private _modal: ModalController
	) {


	}

	ngOnInit() {
		this.buscarHistorico();
	}

	buscarHistorico(): void	{

		this._historicoService.getHistorico()
			.subscribe( data =>	{
				this.historicoHash = data;
				// console.log(data);
				// console.log(this.historicoHash);
			});


	}

	showHistorico(historicoHasheado)	{

		var historicoString = atob(historicoHasheado.historico);
		var historicoObjeto = JSON.parse(historicoString);
		const meuModal = this._modal.create('HistoricoModalPage', { objeto: historicoObjeto});

		meuModal.present();

		// console.log(historicoHasheado.historico);
		// console.log(historicoString);

	}


}
