import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router }  from '@angular/router';  

@Component ({
   selector: 'home',
  templateUrl: './employeelist.html'
})

export   class   Employeelist implements OnInit {  
constructor(private _router: Router){} 
onEdit(): void
{ 
    this._router.navigate(['/employeeadd']); 
} 
ngOnInit(): void
{
    var book = [];
    var deletecounter = [];
    var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);     
		db.transaction(function (tx) {
		   tx.executeSql('SELECT * FROM emp_details', [], function (tx, results) {
			  var len = results.rows.length;
                var i;
			  for (i = 0; i < len; i++)
			  {
                book[i]=results.rows.item(i);		
              }	
              for (i = 0; i < len; i++)
			  {	
                deletecounter[i] = results.rows.item(i).username;
                console.log(deletecounter[2]);
              }	
                var table = document.getElementById("myTable");               
				for( i=0 ; i < len ; i++)
				{		                   
					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);
					var cell5 = row.insertCell(4);
					var cell6 = row.insertCell(5);
					var cell7 = row.insertCell(6);
					var cell8 = row.insertCell(7);
					var cell9 = row.insertCell(8);
					var cell10 = row.insertCell(9);
					var cell11 = row.insertCell(10);
                    var cell12 = row.insertCell(11);
                    var cell13 = row.insertCell(12);
					cell1.innerHTML = book[i].fname;
					cell2.innerHTML = book[i].lname;
					cell3.innerHTML = book[i].email;
					cell4.innerHTML = book[i].contact;
					cell5.innerHTML = book[i].address;
					cell6.innerHTML = book[i].username;
					cell7.innerHTML = book[i].password;
					cell8.innerHTML = book[i].gender;
					cell9.innerHTML = book[i].qualification;
					cell10.innerHTML = book[i].experience;
					cell11.innerHTML = book[i].language;
                    cell12.innerHTML = "<button (click)= 'alert()' >Delete</button>"; 
                    cell13.innerHTML = "<button (click)= 'alert()'>Edit</button>" ;                  
				}				
		   }, null);
        });        
    }   //functiononinit   
}       //class