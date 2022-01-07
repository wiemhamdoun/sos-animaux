import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  submitted= false ;
   constructor(private userService : UserService, private router: Router)  { }
 
   ngOnInit(): void {
   }
 newUser(): void{
 this.submitted = false ;
 this.user = new User();
 }
 save(){
   this.userService.postUsers(this.user)
   .subscribe(data => console.log(data), error => console.log(error));
   this.user = new User();
   this.goroList();
 }
 onSubmit(){
   this.submitted = true ;
   this.save();
 }
   goroList() {
    this.router.navigate(['/index']);
   }
}
