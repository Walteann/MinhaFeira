import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';

import { HomePage } from '../home/home';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    public usuario: string;
    public senha: string;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private _alertCtrl: AlertController, private _usuarioService: UsuarioServiceProvider) {


    }

    meuAlert(titulo, subTitulo) {
        let alert = this._alertCtrl.create({
            title: titulo,
            subTitle: subTitulo,
            buttons: [{ text: 'OK' }]
        });
        alert.present();
    }

    efetuarLogin() {

        // this._usuarioService.autenticaLogin(this.usuario, this.senha)
        //     .then( () => {
        //         this.navCtrl.setRoot(HomePage);     
        //     })
        //     .catch( () =>   {

        //         let tituloEr = 'Houve um problema';
        //         let messagemEr = 'Verifique Login e senha estão corretos';
        //         this.meuAlert(tituloEr, messagemEr);
        //     });

        if (this._usuarioService.autenticaLogin(this.usuario, this.senha)) {
            this.navCtrl.setRoot(HomePage);
        } else {
            let tituloEr = 'Houve um problema';
            let messagemEr = 'Verifique Login e senha estão corretos';
            this.meuAlert(tituloEr, messagemEr);
        }



    }

}
