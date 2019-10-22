"use strict";
exports.__esModule = true;
var react_1 = require("react");
var types_1 = require("../types");
exports.useExtensionViewer = function () {
    var _a = react_1.useState(false), initialized = _a[0], setInitialized = _a[1];
    var _b = react_1.useState(""), opaqueId = _b[0], setOpaqueId = _b[1];
    var _c = react_1.useState(null), id = _c[0], setId = _c[1];
    var _d = react_1.useState(types_1.ExtensionJWTRole.Viewer), role = _d[0], setRole = _d[1];
    var _e = react_1.useState(false), isLinked = _e[0], setIsLinked = _e[1];
    var _f = react_1.useState(""), sessionToken = _f[0], setSessionToken = _f[1];
    var _g = react_1.useState(null), subscriptionStatus = _g[0], setSubscriptionStatus = _g[1];
    var refresh = react_1.useMemo(function () {
        return function () {
            setInitialized(true);
            setOpaqueId(window.Twitch.ext.viewer.opaqueId);
            setId(window.Twitch.ext.viewer.id);
            setRole(window.Twitch.ext.viewer.role);
            setIsLinked(window.Twitch.ext.viewer.isLinked);
            setSessionToken(window.Twitch.ext.viewer.sessionToken);
            setSubscriptionStatus(window.Twitch.ext.viewer.subscriptionStatus);
        };
    }, []);
    var init = react_1.useMemo(function () { return function () {
        window.Twitch.ext.viewer.onChanged(function () {
            setSubscriptionStatus(window.Twitch.ext.viewer.subscriptionStatus);
        });
    }; }, []);
    return {
        refresh: refresh,
        init: init,
        data: {
            opaqueId: opaqueId,
            id: id,
            role: role,
            isLinked: isLinked,
            sessionToken: sessionToken,
            subscriptionStatus: subscriptionStatus,
            initialized: initialized
        }
    };
};
