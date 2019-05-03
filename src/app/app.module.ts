import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatIconModule } from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DragTableComponent } from './drag-table.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    DragDropModule
  ],
  declarations: [ AppComponent, DragTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
