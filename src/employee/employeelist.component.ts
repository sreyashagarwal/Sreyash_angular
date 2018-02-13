import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Employeelists } from '../models/employeelist.model';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
	selector: 'home',
	templateUrl: './employeelist.html'
})

export class Employeelist implements OnInit {
	employee = new Employeelists();
	books = [];
	storage = [];
	len: number;

	constructor(private _changeDetector: ChangeDetectorRef,private _router: Router){}

	ngOnInit(): void 
		{
			this.display();
		}   //functiononinit 

	display(): void 
		{
			var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
			db.transaction((tx) => {
				tx.executeSql('SELECT * FROM emp_details', [],
					(tx, results) => {
						this.len = results.rows.length;
						var i;
						for (i = 0; i < this.len; i++) {
							this.books.push(results.rows.item(i));
						}
						this.storage = this.books;
						this._changeDetector.detectChanges();
					}, null);
			});
		}

	del(id): void 
		{
			console.log(id);
			var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
			db.transaction((tx) => {
				var result = confirm('Are you sure You want to delete ');
				if (result === true)
					tx.executeSql('delete from emp_details where id = ?', [id]);
			});
			location.reload();
		}		
}       //class