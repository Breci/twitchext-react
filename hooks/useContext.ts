import { useMemo, useState } from "react";
import {
  ExtensionMode,
  ExtensionPlaybackMode,
  ExtensionTheme,
  HostingInfo
} from "../types";

export const useExtensionContext = () => {
  const [initialized, setInitialized] = useState(false);

  const [arePlayerControlsVisible, setArePlayerControlsVisible] = useState(
    false
  );
  const [bitrate, setBitrate] = useState(0);
  const [bufferSize, setBufferSize] = useState(0);
  const [displayResolution, setDisplayResolution] = useState("");
  const [game, setGame] = useState("");
  const [hlsLatencyBroadcaster, setHlsLatencyBroadcaster] = useState(0);
  const [hostingInfo, setHostingInfo] = useState<HostingInfo | undefined>();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTheatreMode, setIsTheatreMode] = useState(false);
  const [language, setLanguage] = useState("");
  const [mode, setMode] = useState<ExtensionMode>(ExtensionMode.Viewer);
  const [playbackMode, setPlaybackMode] = useState<ExtensionPlaybackMode>(
    ExtensionPlaybackMode.Video
  );
  const [theme, setTheme] = useState<ExtensionTheme>(ExtensionTheme.Light);
  const [videoResolution, setVideoResolution] = useState("");
  const [volume, setVolume] = useState(0);

  const init = useMemo(() => {
    return () => {
      window.Twitch.ext.onContext((context, changed) => {
        setInitialized(true);
        if (context.arePlayerControlsVisible)
          setArePlayerControlsVisible(context.arePlayerControlsVisible);
        if (context.bitrate) setBitrate(context.bitrate);
        if (context.bufferSize) setBufferSize(context.bufferSize);
        if (context.displayResolution)
          setDisplayResolution(context.displayResolution);
        if (context.game) setGame(context.game);
        if (context.hlsLatencyBroadcaster)
          setHlsLatencyBroadcaster(context.hlsLatencyBroadcaster);
        if (context.hostingInfo) setHostingInfo(context.hostingInfo);
        if (context.isFullScreen) setIsFullScreen(context.isFullScreen);
        if (context.isMuted) setIsMuted(context.isMuted);
        if (context.isPaused) setIsPaused(context.isPaused);
        if (context.isTheatreMode) setIsTheatreMode(context.isTheatreMode);
        if (context.language) setLanguage(context.language);
        if (context.mode) setMode(context.mode);
        if (context.playbackMode) setPlaybackMode(context.playbackMode);
        if (context.theme) setTheme(context.theme);
        if (context.videoResolution)
          setVideoResolution(context.videoResolution);
        if (context.volume) setVolume(context.volume);
      });
    };
  }, []);

  return {
    init,
    data: {
      arePlayerControlsVisible,
      bitrate,
      bufferSize,
      displayResolution,
      game,
      hlsLatencyBroadcaster,
      hostingInfo,
      isFullScreen,
      isMuted,
      isPaused,
      isTheatreMode,
      language,
      mode,
      playbackMode,
      theme,
      videoResolution,
      volume,
      initialized
    }
  };
};
