import { ExcelData, GroupedData, ResponseBody } from './core/interfaces/ResponseBody';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileInputComponent } from "./core/components/file-input/file-input.component";
import { GroupedDataComponent } from "./core/components/grouped-data/grouped-data.component";
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { ExcelDataComponent } from "./core/components/excel-data/excel-data.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FileInputComponent, ExcelDataComponent, GroupedDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'GroupFileData';
  excelData!: ExcelData[];
  groupedData!: GroupedData;

  constructor(private _flowbiteService: FlowbiteService) { }

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
    });

  }

  handleGroupList(fileContent: any) {
    this.groupedData = fileContent.groupedData;
    this.excelData = fileContent.excelData;
    localStorage.setItem("groupedData", JSON.stringify(this.groupedData));
    console.log('File uploaded successfully', this.groupedData);
    console.log('File uploaded successfully', this.excelData);
  }
}

