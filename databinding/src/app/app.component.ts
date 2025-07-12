import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { TableExportComponent } from './excel-downlod/excel-downlod.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatabindingComponent,TableExportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Data Binding Tutorial';
}
