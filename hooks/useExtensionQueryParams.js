"use strict";
exports.__esModule = true;
var types_1 = require("../types");
exports.useExtensionQueryParams = function () {
    var params = new URLSearchParams(window.location.search);
    return {
        anchor: params.get("anchor"),
        language: params.get("language"),
        locale: params.get("locale"),
        mode: params.get("mode"),
        platform: params.get("platform"),
        popout: params.get("popout") === types_1.ExtensionOutState.True,
        state: params.get("state")
    };
};
