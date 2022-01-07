import { Animal } from './../animal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../animal.service';
@Component({
  selector: 'app-modifanimal',
  templateUrl: './modifanimal.component.html',
  styleUrls: ['./modifanimal.component.css']
})
export class ModifanimalComponent implements OnInit {
  id_animal!: number;
  animal = new Animal() ;
  constructor(private route: ActivatedRoute, private router: Router,private animalService: AnimalService) { }
 
  ngOnInit(): void {
    this.animal = new Animal;
    this.id_animal= this.route.snapshot.params['id_animal'];
    this.animalService.getOneAnimal(this.id_animal)
    .subscribe(data =>{
      console.log(data)
      this.animal= data;
    },
    error => console.log(error));
  }
  updateAnimal(){
    this.animalService.posttAnimals(this.animal.id_animal,this.animal)
    .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
    this.animal= new Animal;
    this.gotoList();
  }
 
  gotoList() {
    this.router.navigate(['/lista']);
  }
  onSubmit(){
    this.updateAnimal();
  }
 
}



