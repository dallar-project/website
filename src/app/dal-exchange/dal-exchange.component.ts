import { Component } from "@angular/core";
import { PriceApiService } from "../services/price-api.service";
import { IDigitalPriceData } from "../types/idigitalprice-data";

@Component({
    selector: 'dal-exchange',
    templateUrl: './dal-exchange.component.html',
})
export class DalExchangeComponent {
    selectedFromValue: string;
    selectedToValue: string;
    currencies = ["DAL", "BTC", "USD"];
    amount = 1;
    result = 0;
    dallarData: IDigitalPriceData;
    btcUsdRate = 0;

    constructor(private priceService: PriceApiService) {
        this.priceService.getDigitalPriceData().subscribe(data => {
            this.dallarData = (data.filter(item => item.currency === "DAL"))[0];
        });

        this.priceService.getBtcToUsdRate().subscribe(data => {
            console.log(data);
            this.btcUsdRate = 1 / data;
        })

        this.runConversion();
    }

    onAmountUpdate(value: string) {
        this.amount = +value;
    }

    runConversion() {
        //TODO: Actually research how to implement a currency conversion calculator elegantly.
        if (this.dallarData) {
            if (this.selectedFromValue === "DAL" && this.selectedToValue === "BTC") {
                this.result = (this.amount * this.dallarData.price);
            }

            if (this.selectedFromValue === "DAL" && this.selectedToValue === "USD") {
                this.result = this.amount * this.dallarData.price * this.btcUsdRate;
            }

            if (this.selectedFromValue === "BTC" && this.selectedToValue === "USD") {
                this.result = this.btcUsdRate * this.amount;
            }

            if (this.selectedFromValue === "BTC" && this.selectedToValue === "DAL") {
                this.result = (this.amount / this.dallarData.price);
            }

            if (this.selectedFromValue === "USD" && this.selectedToValue === "BTC") {
                this.result = (1 / this.btcUsdRate) * this.amount;
            }

            if (this.selectedFromValue === "USD" && this.selectedToValue === "DAL") {
                this.result = this.amount / this.dallarData.price / this.btcUsdRate;
            }

            if (this.selectedFromValue === this.selectedToValue) {
                this.result = this.amount;
            }
        }
    }

    updateSelectedTo(selectedItem: string) {
        this.result = 0;
        this.selectedToValue = selectedItem;

        this.runConversion();
    }

    updateSelectedFrom(selectedItem: string) {
        this.result = 0;
        this.selectedFromValue = selectedItem;

        this.runConversion();
    }
}
