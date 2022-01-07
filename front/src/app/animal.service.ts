import { Observable } from 'rxjs';
import { Animal } from './animal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl ='http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  selectedAnimal:Animal| undefined;
  animals:Animal[] | undefined;
 
    constructor(private http: HttpClient) { 
      this.selectedAnimal= new Animal()
    }
    getAnimals():Observable<Animal[]>{ 
     
      return this.http.get<Animal[]>(`http://localhost:3000`+'/animal');
    }
    postAnimals(animal:Animal){
      return this.http.post(`http://localhost:3000/animal`,animal)
    }
    posttAnimals(id_animal:String,value: any): Observable<Object> {
      return this.http.post(`http://localhost:3000/animal/edit${id_animal}`,value)
    }
    deleteeAnimal(id_animal:String){
      return this.http.post(`http://localhost:3000/animal/delete`,id_animal)
    }
    updateAnimal(id_animal: String|undefined, value: any): Observable<Object> {
      return this.http.put(baseUrl+'/animals/'+id_animal, value);
    }
    getOneAnimal(id_animal: number):Observable<any> {
      return this.http.get(`http://localhost:3000/findfirst`+ id_animal);
    }
}
