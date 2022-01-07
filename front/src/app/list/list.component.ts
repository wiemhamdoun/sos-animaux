import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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
  console.log(this.animal)
}
deleteAnimall(id_animal:any)
{
  this.animalService.deleteeAnimal(id_animal)
  .subscribe(
    (res) => {
      this.reloadData();
    },
    (   error: any) => console.log(error));
}
deleteModule(id_animal: String ) {
  this.animalService.deleteeAnimal(this.id_animal)
    .subscribe(
      (      data: any) => {
        console.log(id_animal + " Deleted");
        console.log(data);
         this.reloadData();
      },
      (      error: any) => {
        console.log(id_animal + " Deleted");
        console.log(error)
      });
}
updateAnimal(id_animal:String){
  this.router.navigate(['updateAnimal',id_animal]);
}

}
