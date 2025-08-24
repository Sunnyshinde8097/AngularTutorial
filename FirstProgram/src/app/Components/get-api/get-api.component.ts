import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {

  userList :any[]=[];
   constructor(private http:HttpClient){

   }  

   getAllUser(){
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      debugger;
      this.userList = res;
    })
   }

}
