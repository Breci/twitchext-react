import { useMemo, useState } from "react";
import { TwitchExtViewer, TwitchExtViewerData } from "../types/";

export const useExtensionViewer = () => {
  const [viewer, setViewer] = useState<
    TwitchExtViewerData & { initialized: boolean }
  >({
    id: window.Twitch.ext.viewer.id,
    isLinked: window.Twitch.ext.viewer.isLinked,
    opaqueId: window.Twitch.ext.viewer.opaqueId,
    role: window.Twitch.ext.viewer.role,
    sessionToken: window.Twitch.ext.viewer.sessionToken,
    subscriptionStatus: window.Twitch.ext.viewer.subscriptionStatus,
    initialized: false
  });
  const refresh = useMemo(
    () => () => {
      setViewer({
        sessionToken: window.Twitch.ext.viewer.sessionToken,
        id: window.Twitch.ext.viewer.id,
        isLinked: window.Twitch.ext.viewer.isLinked,
        opaqueId: window.Twitch.ext.viewer.opaqueId,
        role: window.Twitch.ext.viewer.role,
        subscriptionStatus: window.Twitch.ext.viewer.subscriptionStatus,
        initialized: true
      });
    },
    []
  );

  const init = useMemo(
    () => () => {
      refresh();
      window.Twitch.ext.viewer.onChanged(() => {
        refresh();
      });
    },
    [refresh]
  );

  const fullViewer = useMemo<TwitchExtViewer & { initialized: boolean }>(() => {
    return {
      onChanged: window.Twitch.ext.viewer.onChanged,
      ...viewer
    };
  }, []);

  return {
    refresh,
    init,
    data: fullViewer
  };
};
