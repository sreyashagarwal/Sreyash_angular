import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { Home } from './employee.component';


@NgModule({
 declarations: [
   Home
 ],
 imports: [
   BrowserModule,
   FormsModule
 ],
 providers: [],
 bootstrap: [Home]
})
export class EmpModule { }


