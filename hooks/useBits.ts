import { useState } from "react";
import { TwitchExtBitsTransaction } from "../types/";

export const useExtensionBits = () => {
  const [hasOngoingTransaction, setHasOngoingTransaction] = useState(false);
  const useBits = (sku: string) => {
    setHasOngoingTransaction(true);
    window.Twitch.ext.bits.useBits(sku);
  };

  const onTransactionCancelled = (callback: () => void) => {
    window.Twitch.ext.bits.onTransactionCancelled(callback);
    setHasOngoingTransaction(false);
  };

  const onTransactionComplete = (
    callback: (transaction: TwitchExtBitsTransaction) => void
  ) => {
    window.Twitch.ext.bits.onTransactionComplete(callback);
    setHasOngoingTransaction(false);
  };

  return {
    getProducts: window.Twitch.ext.bits.getProducts,
    onTransactionCancelled,
    onTransactionComplete,
    setUseLoopBack: window.Twitch.ext.bits.setUseLoopBack,
    showBitsBalance: window.Twitch.ext.bits.showBitsBalance,
    useBits,
    hasOngoingTransaction
  };
};
