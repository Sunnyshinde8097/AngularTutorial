import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddEmployeeComponent,EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstProgram';
}
