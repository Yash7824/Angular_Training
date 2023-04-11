import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CryptoResponse } from '../crypto-response';
import { Observable } from 'rxjs';
import { CryptoApiService } from '../crypto-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crypto-single-price',
  templateUrl: './crypto-single-price.component.html',
  styleUrls: ['./crypto-single-price.component.css']
})
export class CryptoSinglePriceComponent {

  constructor(private cryptoApiService: CryptoApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit(){
    let queryData = this.activeRoute.queryParamMap.subscribe(
      (params) => {
        console.log(params);

        let value = params.get('cryptoInput')

        
        if(value != null){
          this.cryptoInput = value;
        }else{
          this.cryptoInput = "BTC"
        }
      }
    )

    // this.showResult();
  }

  Crypto: CryptoResponse = {
    USD: 0,
    JPY: 0,
    EUR: 0
  }

  isReady: boolean = false;

  fetchResponse() {
    this.isReady = true;
    let url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR";
    this.cryptoApiService.fetchResponse(url).subscribe({
      next: (response) => {
        this.Crypto = response;
      }
    })
  }

  cryptoInput = "";
 

  Result: CryptoResponse = {
    USD: 0,
    JPY: 0,
    EUR: 0
  }
  showResult() {
    let  cryptoUrl = `https://min-api.cryptocompare.com/data/price?fsym=${this.cryptoInput}&tsyms=USD,JPY,EUR`
    console.log(cryptoUrl);
    this.cryptoApiService.fetchResponse(cryptoUrl).subscribe({
      next: (response) => {
        console.log(response)
        this.Result = response;
      }
    })
  }
}
