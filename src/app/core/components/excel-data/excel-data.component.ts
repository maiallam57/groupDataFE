import { Component, Input } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ExcelData } from '../../interfaces/ResponseBody';

@Component({
  selector: 'app-excel-data',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './excel-data.component.html',
  styleUrl: './excel-data.component.css'
})
export class ExcelDataComponent {
  @Input() excelData!: ExcelData[];
}
