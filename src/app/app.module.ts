import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { DalExchangeComponent } from "./dal-exchange/dal-exchange.component";
import { PriceApiService } from "./services/price-api.service";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DalExchangeComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ClarityModule,
        HttpClientModule,
        ROUTING
    ],
    providers: [PriceApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
