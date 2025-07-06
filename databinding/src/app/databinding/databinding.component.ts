import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  CourseName : string ="Angular 18 Tutorial";
  
  inputType ="Checkbox";
  rollNo:number =123;
  StateName: string ="GOA";
  isIndian :boolean =true;
  currentDate : Date =new Date();
  myClassName :string ="bg-primary";  

  FullName = signal('Sunny Shinde');
  constructor(){

  }
 
   changeCourseName(){
    this.CourseName= "React JS";
    this.FullName.set("Virat Kohli");
   }

   ShowAlert(message:string){
      alert(message);
   }
}
