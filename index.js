"use strict";
exports.__esModule = true;
var useFeatures_1 = require("./hooks/useFeatures");
exports.useExtensionFeatures = useFeatures_1.useExtensionFeatures;
var useContext_1 = require("./hooks/useContext");
exports.useExtensionContext = useContext_1.useExtensionContext;
var useBits_1 = require("./hooks/useBits");
exports.useExtensionBits = useBits_1.useExtensionBits;
var useExtensionViewer_1 = require("./hooks/useExtensionViewer");
exports.useExtensionViewer = useExtensionViewer_1.useExtensionViewer;
var react_1 = require("react");
var useExtensionQueryParams_1 = require("./hooks/useExtensionQueryParams");
exports.useExtensionQueryParams = useExtensionQueryParams_1.useExtensionQueryParams;
var useExtensionActions_1 = require("./hooks/useExtensionActions");
exports.useExtensionActions = useExtensionActions_1.useExtensionActions;
var unstated_next_1 = require("unstated-next");
var useExtension = function () {
    var _a = useFeatures_1.useExtensionFeatures(), featuresData = _a.data, initFeatures = _a.init;
    var _b = useContext_1.useExtensionContext(), contextData = _b.data, initContext = _b.init;
    var _c = useExtensionViewer_1.useExtensionViewer(), viewerData = _c.data, initViewer = _c.init, refreshViewer = _c.refresh;
    var _d = react_1.useState(false), initialized = _d[0], setInitialized = _d[1];
    window.Twitch.ext.onAuthorized(function (auth) {
        if (!initialized) {
            initFeatures();
            initContext();
            initViewer();
            setInitialized(true);
        }
        refreshViewer();
    });
    return {
        version: window.Twitch.ext.version,
        onAuthorized: window.Twitch.ext.onAuthorized,
        onContext: window.Twitch.ext.onContext,
        onError: window.Twitch.ext.onError,
        onHighlightChanged: window.Twitch.ext.onHighlightChanged,
        onPositionChanged: window.Twitch.ext.onPositionChanged,
        onVisibilityChanged: window.Twitch.ext.onVisibilityChanged,
        send: window.Twitch.ext.send,
        listen: window.Twitch.ext.listen,
        unlisten: window.Twitch.ext.unlisten,
        features: featuresData,
        context: contextData,
        viewer: viewerData,
        bits: useBits_1.useExtensionBits(),
        queryParams: useExtensionQueryParams_1.useExtensionQueryParams(),
        actions: useExtensionActions_1.useExtensionActions()
    };
};
exports.useExtension = useExtension;
var Extension = unstated_next_1.createContainer(useExtension);
var ExtensionProvider = Extension.Provider;
exports.ExtensionProvider = ExtensionProvider;
var useExt = Extension.useContainer;
exports.useExt = useExt;
