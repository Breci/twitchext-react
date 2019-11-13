import { TwitchExt } from "./ext";

// adds the typing to the window object
declare global {
  interface Window {
    Twitch: { ext: TwitchExt };
  }
}

export * from "./ext";
export * from "./viewer";
export * from "./actions";
export * from "./rig";
export * from "./queryparams";
export * from "./purchases";
export * from "./features";
export * from "./context";
export * from "./configuration";
export * from "./bits";
