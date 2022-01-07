import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/authService.components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isloggine: boolean=false;

  constructor(public authService : AuthService) { }
display (){
  
  if ( this.authService.isLoggedIn()){
    return 'Logout';
  }
  return 'login';
}
  ngOnInit(): void {
    console.log("isloggine :"+this.isloggine);
  }

}
