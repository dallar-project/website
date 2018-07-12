import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { IDigitalPriceData } from '../types/idigitalprice-data';

@Injectable()
export class PriceApiService {
    private digitalPriceUrl = 'https://cors.io/?https://digitalprice.io/markets/get-currency-summary?currency=BALANCE_COIN_BITCOIN';
    private btcPriceUrl = "https://blockchain.info/tobtc?currency=USD&value=1";

    constructor(private http: HttpClient) {

    }

    getDigitalPriceData(): Observable<IDigitalPriceData[]> {
        return this.http
          .get<IDigitalPriceData[]>(this.digitalPriceUrl);
    }

    getBtcToUsdRate(): Observable<number> {
        return this.http
          .get<number>(this.btcPriceUrl);
    }
}
