export interface IDigitalPriceData {
    url: string;
    mini_currency: string;
    currency: string;
    base_currency: string;
    volume: number;
    volume_market: number;
    price: number;
    price_change: string;
    class_change: string;
    low?: number;
    high?: number;
}
