import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-excel-downlod',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './excel-downlod.component.html',
  styleUrl: './excel-downlod.component.css'
})
export class TableExportComponent {
  tableData = [
    { id: 1, name: 'Sunny', country: 'India' },
    { id: 2, name: 'Alex', country: 'USA' },
    { id: 3, name: 'Mira', country: 'Shrilanka' }
  ];

  exportToExcel(): void {
    const worksheet = XLSX.utils.json_to_sheet(this.tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array'
    });

    const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(file, 'TableData.xlsx');
  }
}