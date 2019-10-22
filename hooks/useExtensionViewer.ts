import { useMemo, useState } from "react";
import { ExtensionJWTRole, TwitchExtSubscriptionStatus } from "../types";

export const useExtensionViewer = () => {
  const [initialized, setInitialized] = useState(false);

  const [opaqueId, setOpaqueId] = useState("");
  const [id, setId] = useState<string | null>(null);
  const [role, setRole] = useState(ExtensionJWTRole.Viewer);
  const [isLinked, setIsLinked] = useState(false);
  const [sessionToken, setSessionToken] = useState("");
  const [
    subscriptionStatus,
    setSubscriptionStatus
  ] = useState<TwitchExtSubscriptionStatus | null>(null);

  const refresh = useMemo(() => {
    return () => {
      setInitialized(true);
      setOpaqueId(window.Twitch.ext.viewer.opaqueId);
      setId(window.Twitch.ext.viewer.id);
      setRole(window.Twitch.ext.viewer.role);
      setIsLinked(window.Twitch.ext.viewer.isLinked);
      setSessionToken(window.Twitch.ext.viewer.sessionToken);
      setSubscriptionStatus(window.Twitch.ext.viewer.subscriptionStatus);
    };
  }, []);

  const init = useMemo(
    () => () => {
      window.Twitch.ext.viewer.onChanged(() => {
        setSubscriptionStatus(window.Twitch.ext.viewer.subscriptionStatus);
      });
    },
    []
  );

  return {
    refresh,
    init,
    data: {
      opaqueId,
      id,
      role,
      isLinked,
      sessionToken,
      subscriptionStatus,
      initialized
    }
  };
};
