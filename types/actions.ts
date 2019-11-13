export interface TwitchExtActions {
  followChannel: (channelName: string) => void;

  minimize: () => void;

  onFollow: (
    callback: (didFollow: boolean, channelName: string) => void
  ) => void;

  requestIdShare: () => void;
}
