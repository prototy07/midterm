import { Injectable } from '@angular/core';
import { bookdata } from './mockflight';
import { Flight } from '../flight/flight';
@Injectable({
  providedIn: 'root'
})
export class GenerateService {
  flights: Flight[] = [];

  constructor() {

  }



  getFlight(): Flight[] {
    return bookdata.mfData;

  }


}
