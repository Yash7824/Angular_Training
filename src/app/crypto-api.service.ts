import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoResponse } from './crypto-response';
import { BitcoinModel } from './models/BitcoinModel';
import { Bitcoin } from './bitcoin';

@Injectable({
  providedIn: 'root'
})
export class CryptoApiService {

  constructor(private httpSrv: HttpClient){}
  
  fetchResponse(url: string): Observable<CryptoResponse>{
    return this.httpSrv.get<CryptoResponse>(url);
  }

  url="https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10"
  public fetchAnotherResponse(url: String): Observable<any>{
    return this.httpSrv.get<any>(this.url);
  }
}
