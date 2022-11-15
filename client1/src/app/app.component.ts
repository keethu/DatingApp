import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users:any;

  constructor(private http: HttpClient) {}
   ngOnInit() {
     this.getUsers();
  }
  //async getUsers(){
   //var y= this.http.get('https://localhost:5001/user').subscribe();
    getUsers() {
    this.http.get('https://localhost:5001/user').subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
    })
  } 
}
