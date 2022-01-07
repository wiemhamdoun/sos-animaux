import { AnimalService } from './../animal.service';
import { Animal } from './../animal';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-listanimals',
  templateUrl: './listanimals.component.html',
  styleUrls: ['./listanimals.component.css']
})
export class ListanimalsComponent implements OnInit {
  animals: Observable<Animal[]> | undefined;
  animal = new Animal();
  id_animal!: String;
 
   constructor( private router: Router,private animalService: AnimalService) { }
   ngOnInit(): void {
    this.reloadData();
 
    console.log(this.animal);
  }
reloadData(){
  this.animals= this.animalService.getAnimals();
}


updateAnimal(id_animal:String|undefined){
  this.router.navigate(['updateAnimal',id_animal]);
}

}
