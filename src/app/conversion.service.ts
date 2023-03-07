import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConversionService {
  constructor(private http: HttpClient) {}

  setConversion(firstOption: string, secondOption: string, numeral: number) {
    return this.http.get(
      `https://v6.exchangerate-api.com/v6/995a5a6bfa74591816964694/pair/${firstOption}/${secondOption}/${numeral}`
    );
  }
}
