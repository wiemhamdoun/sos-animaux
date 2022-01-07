import { User } from './user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user: User):Observable<any>{ 
    console.log("usermdp"+ user.mdp);
   return this._http.post<any>("http://localhost:3000`,user",user)
  }
}
