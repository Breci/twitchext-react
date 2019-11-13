export interface TwitchExtViewer extends TwitchExtViewerData {
  onChanged: (callback: () => void) => void;
}

export interface TwitchExtViewerData {
  opaqueId: string;
  id: string | null;
  role: ExtensionJWTRole;
  isLinked: boolean;
  sessionToken: string;
  subscriptionStatus: TwitchExtSubscriptionStatus | null;
}

export enum ExtensionJWTRole {
  Viewer = "viewer",
  Moderator = "moderator",
  Broadcaster = "broadcaster",
  External = "external"
}

export interface TwitchExtSubscriptionStatus {
  tier: number;
}
