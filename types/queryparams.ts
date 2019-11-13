export interface TwitchExtClientQueryParams {
  anchor: ExtensionAnchor;
  language: string;
  mode: ExtensionQSMode;
  platform: ExtensionPlatform;
  popout: ExtensionOutState;
  state: ExtensionState;
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

export enum ExtensionQSMode {
  Viewer = "viewer",
  Dashboard = "dashboard",
  Configuration = "config"
}
