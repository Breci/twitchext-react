"use strict";
exports.__esModule = true;
var react_1 = require("react");
var types_1 = require("../types");
exports.useExtensionContext = function () {
    var _a = react_1.useState(false), initialized = _a[0], setInitialized = _a[1];
    var _b = react_1.useState(false), arePlayerControlsVisible = _b[0], setArePlayerControlsVisible = _b[1];
    var _c = react_1.useState(0), bitrate = _c[0], setBitrate = _c[1];
    var _d = react_1.useState(0), bufferSize = _d[0], setBufferSize = _d[1];
    var _e = react_1.useState(""), displayResolution = _e[0], setDisplayResolution = _e[1];
    var _f = react_1.useState(""), game = _f[0], setGame = _f[1];
    var _g = react_1.useState(0), hlsLatencyBroadcaster = _g[0], setHlsLatencyBroadcaster = _g[1];
    var _h = react_1.useState(), hostingInfo = _h[0], setHostingInfo = _h[1];
    var _j = react_1.useState(false), isFullScreen = _j[0], setIsFullScreen = _j[1];
    var _k = react_1.useState(false), isMuted = _k[0], setIsMuted = _k[1];
    var _l = react_1.useState(false), isPaused = _l[0], setIsPaused = _l[1];
    var _m = react_1.useState(false), isTheatreMode = _m[0], setIsTheatreMode = _m[1];
    var _o = react_1.useState(""), language = _o[0], setLanguage = _o[1];
    var _p = react_1.useState(types_1.ExtensionMode.Viewer), mode = _p[0], setMode = _p[1];
    var _q = react_1.useState(types_1.ExtensionPlaybackMode.Video), playbackMode = _q[0], setPlaybackMode = _q[1];
    var _r = react_1.useState(types_1.ExtensionTheme.Light), theme = _r[0], setTheme = _r[1];
    var _s = react_1.useState(""), videoResolution = _s[0], setVideoResolution = _s[1];
    var _t = react_1.useState(0), volume = _t[0], setVolume = _t[1];
    var init = react_1.useMemo(function () {
        return function () {
            window.Twitch.ext.onContext(function (context, changed) {
                setInitialized(true);
                if (context.arePlayerControlsVisible)
                    setArePlayerControlsVisible(context.arePlayerControlsVisible);
                if (context.bitrate)
                    setBitrate(context.bitrate);
                if (context.bufferSize)
                    setBufferSize(context.bufferSize);
                if (context.displayResolution)
                    setDisplayResolution(context.displayResolution);
                if (context.game)
                    setGame(context.game);
                if (context.hlsLatencyBroadcaster)
                    setHlsLatencyBroadcaster(context.hlsLatencyBroadcaster);
                if (context.hostingInfo)
                    setHostingInfo(context.hostingInfo);
                if (context.isFullScreen)
                    setIsFullScreen(context.isFullScreen);
                if (context.isMuted)
                    setIsMuted(context.isMuted);
                if (context.isPaused)
                    setIsPaused(context.isPaused);
                if (context.isTheatreMode)
                    setIsTheatreMode(context.isTheatreMode);
                if (context.language)
                    setLanguage(context.language);
                if (context.mode)
                    setMode(context.mode);
                if (context.playbackMode)
                    setPlaybackMode(context.playbackMode);
                if (context.theme)
                    setTheme(context.theme);
                if (context.videoResolution)
                    setVideoResolution(context.videoResolution);
                if (context.volume)
                    setVolume(context.volume);
            });
        };
    }, []);
    return {
        init: init,
        data: {
            arePlayerControlsVisible: arePlayerControlsVisible,
            bitrate: bitrate,
            bufferSize: bufferSize,
            displayResolution: displayResolution,
            game: game,
            hlsLatencyBroadcaster: hlsLatencyBroadcaster,
            hostingInfo: hostingInfo,
            isFullScreen: isFullScreen,
            isMuted: isMuted,
            isPaused: isPaused,
            isTheatreMode: isTheatreMode,
            language: language,
            mode: mode,
            playbackMode: playbackMode,
            theme: theme,
            videoResolution: videoResolution,
            volume: volume,
            initialized: initialized
        }
    };
};
