import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './index/main/main.component';
import { BibliotecaComponent } from './secundarias/biblioteca/biblioteca.component';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HacemosComponent } from './secundarias/hacemos/hacemos.component';
import { DesarrolloComponent } from './secundarias/desarrollo/desarrollo.component';
import { NoticiasComponent } from './secundarias/noticias/noticias.component';
import { ContactoComponent } from './secundarias/contacto/contacto.component';
import { BuscadorComponent } from './secundarias/buscador/buscador.component';
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './admin/login/login.component';
const rutas: Routes = [
 { path: '', component: MainComponent },
 { path: 'biblioteca/:id/:id2', component: BibliotecaComponent},
 {path:'quehacemos',component: HacemosComponent},
 {path:"desarrollo",component:DesarrolloComponent},
 {path:"noticias",component:NoticiasComponent},
 {path:"contacto",component: ContactoComponent},
 {path:"buscador",component:BuscadorComponent},
 {path:"panel",component:LoginComponent}
];
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rutas),FontAwesomeModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgnAhaXUqhjORDr-TUZkumBUXwpkroAqg'
    }) ],
  declarations: [ AppComponent, NavComponent, FooterComponent, MainComponent, BibliotecaComponent, HacemosComponent, DesarrolloComponent, NoticiasComponent, ContactoComponent, BuscadorComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
