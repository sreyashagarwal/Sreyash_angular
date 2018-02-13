import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Home } from './employee.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAdd } from './employeeadd.component';
import { employeeedit } from './employeeedit.component';
import { Employeelist } from './employeelist.component';

const EmpRoutes: Routes = [
  { path: 'employee', component: Home  },
  { path: 'employeeadd', component: EmployeeAdd  },
  { path: 'employeeedit/:id', component: employeeedit },
  { path: 'employeelist', component: Employeelist },
];

@NgModule({
 declarations: [
   Home ,
   EmployeeAdd,
   employeeedit,
   Employeelist
 ],
 imports: [
   BrowserModule,
   FormsModule,
   RouterModule.forRoot(EmpRoutes)
 ],
 providers: [],
 bootstrap: [Home]
})
export class EmpModule { }


