import {Component , OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'home',
  styleUrls: ['./employee.css'],
  templateUrl: './employee.html'
})
export class Home implements OnInit {
          qualifications : Array<string>;
          experiences : Array<string>;
          languages : Array<string>;
          model : any ;
          i : number;
ngOnInit(): void
    {
              this.qualifications = ['B.com', 'B.tech', 'BE' , 'MBA' , 'M.com'];
              this.experiences = ['1-2 years' ,  '2-4 years' , '4-6 years' , 'more than 6 years'];
              this.languages = [];
              this.model = new Employee('','','','','','','','','B.com', '1-2 years',true,true,true,true,true);
    }

  displaydata(): void 
    {
      alert("Open console to display data");
      console.log("first name : " + this.model.firstname);
      console.log("last name : " + this.model.lastname);
      console.log("Email : " + this.model.email);
      console.log("Contact : " + this.model.contact);
      console.log("Address : " + this.model.address);
      console.log("User name : " + this.model.username);
      console.log("Password : " + this.model.password);
      console.log("Gender : " + this.model.gender);
      console.log("Qualification : " + this.model.qualification);
      console.log("Experience : " + this.model.experience);
      
      this.i=0;
      if(this.model.c == true)
      {
        this.languages[this.i]=" C/C++ ";
        this.i = this.i+1;
      }
      if(this.model.chash == true)
      {
        this.languages[this.i]=" C# ";
        this.i = this.i+1;
      }
      if(this.model.java == true)
      {
        this.languages[this.i]=" java ";
        this.i = this.i+1;
      }
      if(this.model.php == true)
      {
        this.languages[this.i]=" PHP ";
        this.i = this.i+1;
      }
      if(this.model.python == true)
      {
        this.languages[this.i]=" Python ";
        this.i = this.i+1;
      }
      console.log("Coding languages" + this.languages);     
    }
}

