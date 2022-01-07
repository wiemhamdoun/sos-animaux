import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  login(data: { id_pers: string; }) {
    throw new Error('Method not implemented.');
  }
selectedUser:User | undefined;
users:User[] | undefined;
user : User | undefined;
  constructor(private http: HttpClient) { 
    this.selectedUser = new User()
  }
  getUsers(){ 
    return this.http.get(`http://localhost:3000`)
  }
  postUsers(user:User){
    return this.http.post(`http://localhost:3000/user`,user)
  }
  putUsers(user:User){
    return this.http.put(`http://localhost:3000/${user.id_pers}`,user)
  }
  deleteUser(id_pers:string){
    return this.http.get(`http://localhost:3000/${id_pers}`)
  }
}
