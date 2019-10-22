"use strict";
exports.__esModule = true;
exports.useExtensionActions = function () {
    return {
        followChannel: window.Twitch.ext.actions.followChannel,
        minimize: window.Twitch.ext.actions.minimize,
        onFollow: window.Twitch.ext.actions.onFollow,
        requestIdShare: window.Twitch.ext.actions.requestIdShare
    };
};
