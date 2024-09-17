import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { GroupedData } from '../../interfaces/ResponseBody';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-grouped-data',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, DatePipe, CurrencyPipe],
  templateUrl: './grouped-data.component.html',
  styleUrl: './grouped-data.component.css'
})
export class GroupedDataComponent {
  @Input() groupedData!: GroupedData;
  exchangeRate!: number;

  currencyForm = new FormGroup({
    exchangeRate: new FormControl(null, [Validators.pattern('^[0-9]*\\.?[0-9]+$')])
  });

  bodyStates = {
    serviceDate: true,
    poNumber: true,
    account: true,
  };

  toggleBody(section: string): void {
    if (section == 'serviceDate') {
      this.bodyStates.serviceDate = !this.bodyStates.serviceDate;
    } else if (section == 'poNumber') {
      this.bodyStates.poNumber = !this.bodyStates.poNumber;
    } else if (section == 'account') {
      this.bodyStates.account = !this.bodyStates.account;
    }
  }

  onSubmit(): void {
    if (this.currencyForm.valid) {
      this.exchangeRate = Number(this.currencyForm.get('exchangeRate')?.value);
      if (this.exchangeRate == 0 || this.exchangeRate == null || this.exchangeRate == undefined) {
        this.groupedData = JSON.parse(localStorage.getItem("groupedData")!);
      } else {
        this.exchange(this.exchangeRate)
      }
    }
  }

  exchange(rate: number): void {
    const { groupedByAccount, groupedByPONumber, groupedByServiceDate } = this.groupedData;
    console.log(this.groupedData)
    groupedByAccount.totalGrossSalary = groupedByAccount.totalGrossSalaryUsd * rate;
    groupedByPONumber.totalGrossSalary = groupedByPONumber.totalGrossSalaryUsd * rate;
    groupedByServiceDate.totalGrossSalary = groupedByServiceDate.totalGrossSalaryUsd * rate;

    groupedByAccount.groups.forEach((element) => {
      element.subtotalGrossSalary = element.subtotalGrossSalaryUsd * rate;
    });

    groupedByPONumber.groups.forEach((element) => {
      element.subtotalGrossSalary = element.subtotalGrossSalaryUsd * rate;
    });

    groupedByServiceDate.groups.forEach((element) => {
      element.subtotalGrossSalary = element.subtotalGrossSalaryUsd * rate;
    });
  }

}
