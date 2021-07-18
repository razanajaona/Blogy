import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { RecettesSaleesComponent } from './recettes-salees/recettes-salees.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { RecettesSucreesComponent } from './recettes-sucrees/recettes-sucrees.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent,
    ToolbarComponent,
    RecettesSaleesComponent,
    RecettesSucreesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatMenuModule,
    MatGridListModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
