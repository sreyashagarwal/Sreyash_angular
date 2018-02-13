import {Component , OnInit , ChangeDetectorRef } from '@angular/core';
import { Employeelists } from '../models/employeelist.model';
import { Router }  from '@angular/router';  
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',  
  templateUrl: './employeeedit.html'
})
export class employeeedit implements OnInit {    
          qualifications : Array<string>;
          experiences : Array<string>;
          languages : Array<string>;
          model : any ;
          i : number;
          id : number;
          data : Array<string>;
         
 constructor(private _changeDetector: ChangeDetectorRef,private route: ActivatedRoute,private _router: Router)
 {
     console.log(this.route.snapshot.params['id']);
 }

onBack(): void 
{ 
    this._router.navigate(['/employeelist']); 
}
 
ngAfterViewInit(): void 
{
    this._changeDetector.detectChanges();   
}

ngOnInit(): void
{    
   
    this.qualifications = ['B.com', 'B.tech', 'BE' , 'MBA' , 'M.com'];
    this.experiences = ['1-2 years' ,  '2-4 years' , '4-6 years' , 'more than 6 years'];
    this.model = new Employeelists();
    this.languages = [];  
    let id = +this.route.snapshot.params['id'];
    this.putdata(id);
    
} //functiononinit

putdata(id: number) : void 
{   
    var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);	
    db.transaction((tx) => {
       tx.executeSql('SELECT * FROM emp_details where id = ?', [id], 
       (tx, results) => {
        var item = results.rows.item(0);
        this.model.id = item.id;
        this.model.firstname = item.fname;
        this.model.lastname=item.lname;
        this.model.email=item.email;
        this.model.contact=item.contact;
        this.model.address=item.address;
        this.model.username=item.username;
        this.model.password=item.password;
        this.model.gender=item.gender;
        this.model.qualification=item.qualification;
        this.model.experience=item.experience;
        this.model.languages=item.language;
        console.log("the languages" + item.language);
        var a =[];
        a = item.language;
        console.log("the languages" + a.indexOf(" java "));
        
        if(a.indexOf(" PHP ") > -1)
        this.model.php = true;
        if(a.indexOf(" java ") > -1)
        this.model.java = true;
        if(a.indexOf(" Python ") > -1)
        this.model.python = true;
        if(a.indexOf(" C/C++ ") > -1)
        this.model.c = true;
        if(a.indexOf(" C# ") > -1)
        this.model.chash = true;

        this._changeDetector.detectChanges();        
    }, null);
    });
}

updatedata(id): void 
{
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
	    (transaction) => {				
		transaction.executeSql('update emp_details set fname = ?, lname = ?, email = ?, contact = ?, address = ?, username = ?, password = ?, gender = ?, qualification = ?, experience = ?, language = ? where id = ?', [details[0], details[1], details[2], details[3], details[4],details[5],details[6],details[7],details[8],details[9],details[10],id]);
        });	
                          	
    alert("Data Updated !!!!!!! Thank you.");
    this.onBack();

    }   //function
}       // class
