import { useMemo, useState } from "react";
import { PartialTwitchExtContext } from "../types/";

export const useExtensionContext = () => {
  const [context, setContext] = useState<
    PartialTwitchExtContext & { initialized: boolean }
  >({
    initialized: false
  });

  const init = useMemo(() => {
    return () => {
      window.Twitch.ext.onContext((context, changed) => {
        setContext(c => {
          return { ...c, ...context, initialized: true };
        });
      });
    };
  }, []);

  return {
    init,
    data: context
  };
};
