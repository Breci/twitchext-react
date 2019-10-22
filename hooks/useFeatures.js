"use strict";
exports.__esModule = true;
var react_1 = require("react");
exports.useExtensionFeatures = function () {
    var _a = react_1.useState(false), initialized = _a[0], setInitialized = _a[1];
    var _b = react_1.useState(false), isChatEnabled = _b[0], setIsChatEnabled = _b[1];
    var _c = react_1.useState(false), isBitsEnabled = _c[0], setIsBitsEnabled = _c[1];
    var _d = react_1.useState(false), isSubscriptionStatusAvailable = _d[0], setIsSubscriptionStatusAvailable = _d[1];
    var init = react_1.useMemo(function () {
        return function () {
            window.Twitch.ext.features.onChanged(function () {
                setInitialized(true);
                setIsChatEnabled(window.Twitch.ext.features.isChatEnabled);
                setIsBitsEnabled(window.Twitch.ext.features.isBitsEnabled);
                setIsSubscriptionStatusAvailable(window.Twitch.ext.features.isSubscriptionStatusAvailable);
            });
        };
    }, []);
    return {
        init: init,
        data: {
            isChatEnabled: isChatEnabled,
            isBitsEnabled: isBitsEnabled,
            isSubscriptionStatusAvailable: isSubscriptionStatusAvailable,
            onChanged: window.Twitch.ext.features.onChanged
        }
    };
};
