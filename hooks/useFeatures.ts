import { useMemo, useState } from "react";

export const useExtensionFeatures = () => {
  const [initialized, setInitialized] = useState(false);

  const [isChatEnabled, setIsChatEnabled] = useState(false);
  const [isBitsEnabled, setIsBitsEnabled] = useState(false);
  const [
    isSubscriptionStatusAvailable,
    setIsSubscriptionStatusAvailable
  ] = useState(false);

  const init = useMemo(() => {
    return () => {
      window.Twitch.ext.features.onChanged(() => {
        setInitialized(true);
        setIsChatEnabled(window.Twitch.ext.features.isChatEnabled);
        setIsBitsEnabled(window.Twitch.ext.features.isBitsEnabled);
        setIsSubscriptionStatusAvailable(
          window.Twitch.ext.features.isSubscriptionStatusAvailable
        );
      });
    };
  }, []);

  return {
    init,
    data: {
      isChatEnabled,
      isBitsEnabled,
      isSubscriptionStatusAvailable,
      onChanged: window.Twitch.ext.features.onChanged
    }
  };
};
