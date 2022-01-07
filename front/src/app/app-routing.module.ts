import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { VeterinaryComponent } from './veterinary/veterinary.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ListanimalsComponent } from './listanimals/listanimals.component';
import { AjoutanimalComponent } from './ajoutanimal/ajoutanimal.component';
import { ModifanimalComponent } from './modifanimal/modifanimal.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'veterinary', component: VeterinaryComponent},
  { path: 'list', component: ListanimalsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'index', component: IndexComponent},
  { path: 'lista', component: ListComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'Listanimals', component: ListanimalsComponent},
  { path: 'ajoutanimal', component: AjoutanimalComponent},
  { path: 'modifanimal', component: ModifanimalComponent},
  { path: 'updateAnimal/:id_animal', component: ModifanimalComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
