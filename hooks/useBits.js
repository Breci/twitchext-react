"use strict";
exports.__esModule = true;
var react_1 = require("react");
exports.useExtensionBits = function () {
    var _a = react_1.useState(false), hasOngoingTransaction = _a[0], setHasOngoingTransaction = _a[1];
    var useBits = function (sku) {
        setHasOngoingTransaction(true);
        window.Twitch.ext.bits.useBits(sku);
    };
    var onTransactionCancelled = function (callback) {
        window.Twitch.ext.bits.onTransactionCancelled(callback);
        setHasOngoingTransaction(false);
    };
    var onTransactionComplete = function (callback) {
        window.Twitch.ext.bits.onTransactionComplete(callback);
        setHasOngoingTransaction(false);
    };
    return {
        getProducts: window.Twitch.ext.bits.getProducts,
        onTransactionCancelled: onTransactionCancelled,
        onTransactionComplete: onTransactionComplete,
        setUseLoopBack: window.Twitch.ext.bits.setUseLoopBack,
        showBitsBalance: window.Twitch.ext.bits.showBitsBalance,
        useBits: useBits,
        hasOngoingTransaction: hasOngoingTransaction
    };
};
