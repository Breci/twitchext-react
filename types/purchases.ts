export interface TwitchExtPurchases {
  beginPurchase: (...args: any[]) => any;
  getPrices: (...args: any[]) => any;
  onReloadEntitlements: (...args: any[]) => any;
}
