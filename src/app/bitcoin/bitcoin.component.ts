import { Component } from '@angular/core';
import { CryptoApiService } from '../crypto-api.service';
import { Bitcoin } from '../bitcoin';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent {

  BitcoinData: Bitcoin[] = []

  constructor(private cryptoApiService: CryptoApiService){}
  fetchData(){
    let url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&limit=10"
    this.cryptoApiService.fetchAnotherResponse(url).subscribe({
      next: (response) => {
        // console.log(response.Data.Data)
        this.BitcoinData = response.Data.Data;
      }
    })

    // console.log(this.BitcoinData)
  }
}
