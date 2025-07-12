import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structure-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;
  isActive : boolean = true;
  cityArray:string[] =['Pune','Mumbai','Nagpur','Thane'];

  studentList: any[] =[
    { StudentId:1,name:'AAA',city:'pune',isActive:false},
    {StudentId:2,name:'BBB',city:'Mumbai',isActive:true},
    {StudentId:3,name:'CCC',city:'Satara',isActive:false},
    {StudentId:4,name:'DDD',city:'Navi Mumbai',isActive:false},
  ]


  isDiv3Divible :string ="";
  num1 : string ='';
  num2 : string ='';
  showDiv1() {
    this.isDiv1Visible = true;
  }

  hideDiv1() {
    this.isDiv1Visible = false;
  }

  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }
}