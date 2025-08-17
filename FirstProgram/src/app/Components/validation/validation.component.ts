import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { zip } from 'rxjs';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [FormsModule,JsonPipe,CommonModule],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
   studentObj :any = {
    firstName :'',
    lastName :'',
    Username :'',
    City :'',
    state:'',
    Zip:'',
    IsAcceptTerm :false
   }
   formValue:any;
   onSubmit(){
    debugger;
    this.formValue = this.studentObj;
   }
}
