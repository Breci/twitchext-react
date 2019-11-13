export interface TwitchExtFeatureFlags {
  isChatEnabled: boolean;
  isBitsEnabled: boolean;
  isSubscriptionStatusAvailable: boolean;
}

export interface TwitchExtFeatures extends TwitchExtFeatureFlags {
  onChanged: (
    callback: (changed: ReadonlyArray<keyof TwitchExtFeatureFlags>) => void
  ) => void;
}
