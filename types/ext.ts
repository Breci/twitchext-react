import { TwitchExtActions } from "./actions";
import { TwitchExtConfiguration } from "./configuration";
import { TwitchExtFeatures } from "./features";
import { TwitchExtBits } from "./bits";
import { TwitchExtRig } from "./rig";
import { TwitchExtViewer } from "./viewer";
import { TwitchExtPurchases } from "./purchases";
import { PartialTwitchExtContext } from "./context";
import { TwitchExtChannel } from "./channel";

export interface TwitchExt {
  version: string;

  channel: TwitchExtChannel;

  environment: "production";

  actions: TwitchExtActions;

  configuration: TwitchExtConfiguration;

  features: TwitchExtFeatures;

  bits: TwitchExtBits;

  rig: TwitchExtRig;

  viewer: TwitchExtViewer;

  purchases: TwitchExtPurchases;

  onAuthorized: (callback: OnAuthorizedCallback) => void;
  onHighlightChanged: (callback: IsHighlightedCallback) => void;

  onContext: (callback: OnContextCallback) => void;

  onError: (errorCallback: OnErrorCallback) => void;

  onPositionChanged: (callback: OnPositionChangedCallback) => void;

  onVisibilityChanged: (callback: onVisibilityChangedCallback) => void;

  send: (target: string, contentType: string, message: object | string) => void;

  listen: (target: string, callback: ExtensionListenerCallback) => void;

  unlisten: (target: string, callback: ExtensionListenerCallback) => void;
}

export interface TwitchExtAuthorized {
  channelId: string;
  clientId: string;
  token: string;
  userId: string;
}

export type OnAuthorizedCallback = (auth: TwitchExtAuthorized) => void;

export type IsHighlightedCallback = (isHighlighted: boolean) => void;

export type OnContextCallback = (
  context: PartialTwitchExtContext,
  changed: ReadonlyArray<PartialTwitchExtContext>
) => void;

export type OnErrorCallback = (errorValue: any) => void;

export type OnPositionChangedCallback = (position: {
  x: number;
  y: number;
}) => void;

export type onVisibilityChangedCallback =
  | ((isVisible: false) => void)
  | ((isVisible: true, context: PartialTwitchExtContext) => void);

export type ExtensionListenerCallback = (
  target: string,
  contentType: string,
  message: string
) => void;
