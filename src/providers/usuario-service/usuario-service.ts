// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UsuarioServiceProvider {
	
	public nomeUser = 'walteann';
	public senhaUser = '123456';

	constructor() {

	}


	autenticaLogin(usuario, senha) {
		
		if(usuario == this.nomeUser && senha == this.senhaUser )	{
			return true;
		}else{
			return false;
		}

	}

}
