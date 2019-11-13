import { useMemo, useState } from "react";
import { TwitchExtFeatureFlags, TwitchExtFeatures } from "../types/";

export const useExtensionFeatures = () => {
  const [features, setFeatures] = useState<
    TwitchExtFeatureFlags & { initialized: boolean }
  >({
    isBitsEnabled: window.Twitch.ext.features.isBitsEnabled,
    isChatEnabled: window.Twitch.ext.features.isChatEnabled,
    isSubscriptionStatusAvailable:
      window.Twitch.ext.features.isSubscriptionStatusAvailable,
    initialized: false
  });

  const init = useMemo(() => {
    return () => {
      window.Twitch.ext.features.onChanged(() => {
        setFeatures({
          isBitsEnabled: window.Twitch.ext.features.isBitsEnabled,
          isChatEnabled: window.Twitch.ext.features.isChatEnabled,
          isSubscriptionStatusAvailable:
            window.Twitch.ext.features.isSubscriptionStatusAvailable,
          initialized: true
        });
      });
    };
  }, []);

  const fullFeatures = useMemo<
    TwitchExtFeatures & { initialized: boolean }
  >(() => {
    return { onChanged: window.Twitch.ext.features.onChanged, ...features };
  }, [features]);

  return {
    init,
    data: fullFeatures
  };
};
