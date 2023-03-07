import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../conversion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentToUsd: number;
  currentToEur: number;

  constructor(private conversionService: ConversionService) {
    this.currentToUsd = NaN;
    this.currentToEur = NaN;
  }

  ngOnInit(): void {
    this.conversionService
      .setConversion('EUR', 'UAH', 1)
      .subscribe((result: any) => {
        this.currentToEur = result.conversion_result;
      });
    this.conversionService
      .setConversion('USD', 'UAH', 1)
      .subscribe((result: any) => {
        this.currentToUsd = result.conversion_result;
      });
  }
}
