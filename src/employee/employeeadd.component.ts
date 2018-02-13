import {Component , OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router }  from '@angular/router';  

@Component({
  selector: 'home',  
  templateUrl: './employeeadd.html'
})
export class EmployeeAdd implements OnInit {    
          qualifications : Array<string>;
          experiences : Array<string>;
          languages : Array<string>;
          model : any ;
          i : number;
          data : Array<string>;

constructor(private _router: Router){} 

onBack(): void 
{ 
    this._router.navigate(['/employeelist']); 
} 
        
ngOnInit(): void
{
    this.qualifications = ['B.com', 'B.tech', 'BE' , 'MBA' , 'M.com'];
    this.experiences = ['1-2 years' ,  '2-4 years' , '4-6 years' , 'more than 6 years'];
    this.languages = [];
    this.model = new Employee('','','','','','','','','B.com', '1-2 years',true,true,true,true,true);

} //functiononinit

createTables() : void
{
    var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
        db.transaction(
            function (transaction) {
                transaction.executeSql('CREATE TABLE IF NOT EXISTS emp_details(id INTEGER PRIMARY KEY AUTOINCREMENT,fname TEXT NOT NULL,lname TEXT NOT NULL,email TEXT NOT NULL,contact TEXT NOT NULL,address TEXT NOT NULL,username TEXT NOT NULL,password TEXT NOT NULL,gender TEXT NOT NULL, qualification TEXT, experience TEXT,language TEXT NOT NULL);', []);
            }
        );
}

initDatabase() : void 
{
    try {
        if (!window.openDatabase) 
        {
            alert('Databases are not supported in this browser.');
        } 
        else 
        {
            var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
            this.createTables();
        }
    } catch(e) 
    {
        if (e == 2) {
            // Version number mismatch.
            alert("Invalid database version.");
        } else {
            alert("Unknown error "+e+".");
        }
        return;
    }
}

storedata(): void 
{
    this.initDatabase();
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
    this.data = [this.model.firstname,this.model.lastname,this.model.email,this.model.contact,this.model.address,this.model.username,this.model.password,this.model.gender,this.model.qualification,this.model.experience,this.languages];
    var details = [];
    details = this.data;
    var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);		
    db.transaction(
        function (transaction) {        
        transaction.executeSql("INSERT INTO emp_details(fname, lname, email, contact, address, username, password, gender, qualification, experience, language) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [details[0], details[1], details[2], details[3], details[4],details[5],details[6],details[7],details[8],details[9],details[10]]);
        }
    );
    alert("Data Stored !!!!!!! Thank you.");
    this.onBack();

    }   //function

}       // class
