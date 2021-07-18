import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { RecettesSaleesComponent } from './recettes-salees/recettes-salees.component';
import { RecettesSucreesComponent } from './recettes-sucrees/recettes-sucrees.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'recettes-Salees',component:RecettesSaleesComponent},
  {path:'recettes-Sucrees',component:RecettesSucreesComponent},
  {path:'contact',component:ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
