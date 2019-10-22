declare global {
  interface Window {
    Twitch: { ext: TwitchExt };
  }
}

// Type definitions for non-npm package twitch-ext 1.20
// Project: https://dev.twitch.tv/docs/extensions/reference/#javascript-helper
// Definitions by: Benedict Etzel <https://github.com/beheh>
//                 Federico Della Rovere <https://github.com/FedeDR>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export interface TwitchExt {
  version: string;

  environment: "production";

  actions: TwitchExtActions;

  configuration: TwitchExtConfiguration;

  features: TwitchExtFeatures;

  bits: TwitchExtBits;

  rig: TwitchExtRig;

  viewer: TwitchExtViewer;

  onAuthorized: (authCallback: (auth: TwitchExtAuthorized) => void) => void;
  onHighlightChanged: (callback: (isHighlighted: boolean) => void) => void;

  onContext: (
    contextCallback: <T extends Partial<TwitchExtContext>>(
      context: T,
      changed: ReadonlyArray<keyof T>
    ) => void
  ) => void;

  onError: (errorCallback: (errorValue: any) => void) => void;

  onPositionChanged: (
    callback: (position: { x: number; y: number }) => void
  ) => void;

  onVisibilityChanged: (
    callback:
      | ((isVisible: false) => void)
      | ((isVisible: true, context: Partial<TwitchExtContext>) => void)
  ) => void;

  send(target: string, contentType: string, message: object | string): void;

  listen(
    target: string,
    callback: (target: string, contentType: string, message: string) => void
  ): void;

  unlisten(
    target: string,
    callback: (target: string, contentType: string, message: string) => void
  ): void;
}

export interface TwitchExtActions {
  followChannel(channelName: string): void;

  minimize(): void;

  onFollow(callback: (didFollow: boolean, channelName: string) => void): void;

  requestIdShare(): void;
}

export interface TwitchExtConfiguration {
  broadcaster?: { version: string; content: string };
  developer?: { version: string; content: string };
  global?: { version: string; content: string };
  onChanged(callback: () => void): void;
  set(segment: "broadcaster", version: string, content: string): void;
}

export interface TwitchExtFeatureFlags {
  isChatEnabled: boolean;
  isBitsEnabled: boolean;
  isSubscriptionStatusAvailable: boolean;
}

export interface TwitchExtFeatures extends TwitchExtFeatureFlags {
  onChanged(
    callback: (changed: ReadonlyArray<keyof TwitchExtFeatureFlags>) => void
  ): void;
}

export interface TwitchExtBitsProductCost {
  amount: string;
  type: "bits";
}

export interface TwitchExtBitsProduct {
  cost: TwitchExtBitsProductCost;
  displayName: string;
  inDevelopment?: boolean;
  sku: string;
}

export interface TwitchExtBitsTransaction {
  displayName: string;
  initiator: "CURRENT_USER" | "OTHER";
  product: TwitchExtBitsProduct;
  transactionID: string;
  transactionReceipt: string;
  userId: string;
}

export interface TwitchExtBits {
  getProducts(): Promise<ReadonlyArray<TwitchExtBitsProduct>>;
  onTransactionCancelled(callback: () => void): void;
  onTransactionComplete(
    callback: (transaction: TwitchExtBitsTransaction) => void
  ): void;
  setUseLoopBack(useLoopBack: boolean): void;
  showBitsBalance(): void;
  useBits(sku: string): void;
}

export interface TwitchExtRig {
  log(message: string): void;
}
export interface TwitchExtAuthorized {
  channelId: string;
  clientId: string;
  token: string;
  userId: string;
}

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

/**
 * The extension window receives the following query parameters, which indicate
 * information about the extension environment that isn’t subject to change over
 * the frame’s life cycle.
 *
 * @see https://dev.twitch.tv/docs/extensions/reference/#client-query-parameters
 */
export interface TwitchExtClientQueryParams {
  anchor: ExtensionAnchor;
  language: string;
  mode: ExtensionMode;
  platform: ExtensionPlatform;
  popout: ExtensionOutState;
  state:
    | "testing"
    | "hosted_test"
    | "approved"
    | "released"
    | "ready_for_review"
    | "in_review"
    | "pending_action"
    | "uploading";
}

export enum ExtensionOutState {
  True = "true",
  False = "false"
}

export enum ExtensionState {
  Testing = "testing",
  hostedTest = "hosted_test",
  Approved = "approved",
  Released = "released",
  ReadyForReview = "ready_for_review",
  InReview = "in_review",
  PendingAction = "pending_action",
  Uploading = "uploading"
}

export enum ExtensionPlatform {
  Mobile = "mobile",
  Web = "web"
}
export enum ExtensionAnchor {
  Component = "component",
  Panel = "panel",
  VideoOverlay = "video_overlay"
}

export interface TwitchExtViewer {
  opaqueId: string;
  id: string | null;
  role: ExtensionJWTRole;
  isLinked: boolean;
  sessionToken: string;
  subscriptionStatus: TwitchExtSubscriptionStatus | null;
  onChanged: (callback: () => void) => void;
}

export enum ExtensionJWTRole {
  Viewer = "broadcaster",
  Moderator = "moderator",
  Broadcaster = "broadcaster",
  External = "external"
}

export interface TwitchExtSubscriptionStatus {
  tier: number;
}
