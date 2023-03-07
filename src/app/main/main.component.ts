import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConversionService } from '../conversion.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent implements OnInit {
  choices = [
    { id: 1, name: 'UAH' },
    { id: 2, name: 'USD' },
    { id: 3, name: 'EUR' },
  ];

  numeral: number;
  firstOption: string;
  secondOption: string;
  resultList: any;

  reactiveForm = new FormGroup({
    firstOption: new FormControl(),
    secondOption: new FormControl(),
    number: new FormControl(),
  });

  constructor(private conversionService: ConversionService) {
    this.resultList = [];
    this.numeral = NaN;
    this.firstOption = '';
    this.secondOption = '';
  }
  ngOnInit(): void {
    this.reactiveForm.valueChanges.subscribe((selectedValue) => {
      this.firstOption = selectedValue.firstOption;
      this.secondOption = selectedValue.secondOption;
      this.numeral = selectedValue.number;
    });
  }
  setUp() {
    this.conversionService
      .setConversion(this.firstOption, this.secondOption, this.numeral)
      .subscribe((result: any) => {
        console.log(result);
        this.resultList = result.conversion_result;
      });
  }
}
