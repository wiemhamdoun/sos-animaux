
import { User } from '../user';
import {Injectable} from '@angular/core'
export const AUTH_TOKEN_KEY = 'auth-token' ;
export const AUTH_ACCES_DATA = 'acces-data';

@Injectable({
    providedIn : 'root'
})

export class AuthService{

    public authToken : string |null = null;
    public accesData : User | null = null ;
  
    checkStorage(){
        const authToken = sessionStorage.getItem(AUTH_TOKEN_KEY);
        const accesData = sessionStorage.getItem(AUTH_ACCES_DATA);
        this.authToken = authToken;
        if (accesData){
            this.accesData = JSON.parse(accesData) as any ;
        }
        else {
            this.accesData = null ;
        }
    }
    login (authData : User){
        sessionStorage.setItem(AUTH_TOKEN_KEY,authData.id_pers+ '');
        sessionStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(authData))
        this.checkStorage();

    }
    public isLoggedIn(){
       
        return this.authToken !== null ;
    }
    public logout (){
        if (!this.isLoggedIn()) return;
        sessionStorage.clear();
        this.checkStorage();
    }
    GetId(){
        let id = sessionStorage.getItem('authData.id_pers');
      }
}