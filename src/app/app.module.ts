import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, CatalogoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    SplitButtonModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    DividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
