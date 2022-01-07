import { Animal } from './../animal';
import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutanimal',
  templateUrl: './ajoutanimal.component.html',
  styleUrls: ['./ajoutanimal.component.css']
})
export class AjoutanimalComponent implements OnInit {

  animal: Animal = new Animal();
  submitted= false ;
   constructor(private userService : AnimalService, private router: Router)  { }
 
   ngOnInit(): void {
   }
 newUser(): void{
 this.submitted = false ;
 this.animal = new Animal();
 }
 save(){
   this.userService.postAnimals(this.animal)
   .subscribe(data => console.log(data), error => console.log(error));
   this.animal = new Animal();
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
