import { useMemo, useState } from "react";
import { TwitchExtConfiguration, TwitchExtConfigurationData } from "../types/";

export const useExtensionConfiguration = () => {
  const [configuration, setConfiguration] = useState<
    TwitchExtConfigurationData & { initialized: boolean }
  >({
    broadcaster: window.Twitch.ext.configuration.broadcaster,
    developer: window.Twitch.ext.configuration.developer,
    global: window.Twitch.ext.configuration.global,
    initialized: false
  });

  const init = useMemo(() => {
    return () => {
      window.Twitch.ext.configuration.onChanged(() => {
        setConfiguration({
          broadcaster: window.Twitch.ext.configuration.broadcaster,
          developer: window.Twitch.ext.configuration.developer,
          global: window.Twitch.ext.configuration.global,
          initialized: true
        });
      });
    };
  }, []);

  const fullConfiguration = useMemo<
    TwitchExtConfiguration & { initialized: boolean }
  >(() => {
    return {
      onChanged: window.Twitch.ext.configuration.onChanged,
      set: window.Twitch.ext.configuration.set,
      ...configuration
    };
  }, [configuration]);
  return {
    init,
    data: fullConfiguration
  };
};
