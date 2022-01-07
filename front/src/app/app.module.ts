import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { VeterinaryComponent } from './veterinary/veterinary.component';
import { IndexComponent } from './index/index.component';
import { ListanimalsComponent } from './listanimals/listanimals.component';
import { AjoutanimalComponent } from './ajoutanimal/ajoutanimal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ModifanimalComponent } from './modifanimal/modifanimal.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    VeterinaryComponent,
    IndexComponent,
    ListanimalsComponent,
    AjoutanimalComponent,
    NotFoundComponent,
    ContactComponent,
    ModifanimalComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,
  FormsModule,
 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
