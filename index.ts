import { useExtensionFeatures } from "./hooks/useFeatures";
import { useExtensionContext } from "./hooks/useContext";
import { useExtensionBits } from "./hooks/useBits";
import { useExtensionViewer } from "./hooks/useExtensionViewer";
import { useState } from "react";
import { useExtensionQueryParams } from "./hooks/useExtensionQueryParams";
import { useExtensionActions } from "./hooks/useExtensionActions";
import { createContainer } from "unstated-next";

const useExtension = () => {
  const { data: featuresData, init: initFeatures } = useExtensionFeatures();
  const { data: contextData, init: initContext } = useExtensionContext();
  const {
    data: viewerData,
    init: initViewer,
    refresh: refreshViewer
  } = useExtensionViewer();

  const [initialized, setInitialized] = useState(false);

  window.Twitch.ext.onAuthorized(auth => {
    if (!initialized) {
      initFeatures();
      initContext();
      initViewer();
      setInitialized(true);
    }
    refreshViewer();
  });

  return {
    version: window.Twitch.ext.version,
    onAuthorized: window.Twitch.ext.onAuthorized,
    onContext: window.Twitch.ext.onContext,
    onError: window.Twitch.ext.onError,
    onHighlightChanged: window.Twitch.ext.onHighlightChanged,
    onPositionChanged: window.Twitch.ext.onPositionChanged,
    onVisibilityChanged: window.Twitch.ext.onVisibilityChanged,
    send: window.Twitch.ext.send,
    listen: window.Twitch.ext.listen,
    unlisten: window.Twitch.ext.unlisten,
    features: featuresData,
    context: contextData,
    viewer: viewerData,
    bits: useExtensionBits(),
    queryParams: useExtensionQueryParams(),
    actions: useExtensionActions()
  };
};

const Extension = createContainer(useExtension);
const ExtensionProvider = Extension.Provider;
const useExt = Extension.useContainer;

export {
  useExt,
  ExtensionProvider,
  useExtension,
  useExtensionBits,
  useExtensionContext,
  useExtensionFeatures,
  useExtensionViewer,
  useExtensionQueryParams,
  useExtensionActions
};
