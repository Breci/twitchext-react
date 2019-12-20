import React, { useContext } from "react";
import { TwitchExt } from "./types";
import { useExtension } from "./index";

const ExtensionContext = React.createContext<TwitchExt>(window.Twitch.ext);

export const ExtensionProvider: React.FC = ({ children }) => {
  return (
    <ExtensionContext.Provider value={useExtension()}>
      {children}
    </ExtensionContext.Provider>
  );
};

export const useExt = () => useContext(ExtensionContext);
