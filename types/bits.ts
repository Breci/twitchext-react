export interface TwitchExtBits {
  getProducts: () => Promise<ReadonlyArray<TwitchExtBitsProduct>>;
  onTransactionCancelled: (callback: () => void) => void;
  onTransactionComplete: (
    callback: (transaction: TwitchExtBitsTransaction) => void
  ) => void;
  setUseLoopBack: (useLoopBack: boolean) => void;
  showBitsBalance: () => void;
  useBits: (sku: string) => void;
}

export interface TwitchExtBitsProductCost {
  amount: string;
  type: "bits";
}

export interface TwitchExtBitsProduct {
  cost: TwitchExtBitsProductCost;
  displayName: string;
  inDevelopment?: boolean;
  sku: string;
}

export interface TwitchExtBitsTransaction {
  displayName: string;
  initiator: "CURRENT_USER" | "OTHER";
  product: TwitchExtBitsProduct;
  transactionID: string;
  transactionReceipt: string;
  userId: string;
}
