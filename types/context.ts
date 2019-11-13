export interface TwitchExtContext {
  arePlayerControlsVisible: boolean;
  bitrate: number;
  bufferSize: number;
  displayResolution: string;
  game: string;
  hlsLatencyBroadcaster: number;
  hostingInfo?: HostingInfo;
  isFullScreen: boolean;
  isMuted: boolean;
  isPaused: boolean;
  isTheatreMode: boolean;
  language: string;
  mode: ExtensionMode;
  playbackMode: ExtensionPlaybackMode;
  theme: ExtensionTheme;
  videoResolution: string;
  volume: number;
}

export interface HostingInfo {
  hostedChannelId: string;
  hostingChannelId: string;
}

export enum ExtensionMode {
  Viewer = "viewer",
  Dashboard = "dashboard",
  Configuration = "config"
}

export enum ExtensionPlaybackMode {
  Video = "video",
  Audio = "audio",
  Remote = "remote",
  ChatOnly = "chat-only"
}

export enum ExtensionTheme {
  Light = "light",
  Dark = "dark"
}

export type PartialTwitchExtContext = Partial<TwitchExtContext>;
