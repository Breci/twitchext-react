import { useExtensionFeatures } from "./hooks/useFeatures";
import { useExtensionContext } from "./hooks/useContext";
import { useExtensionBits } from "./hooks/useBits";
import { useExtensionViewer } from "./hooks/useExtensionViewer";
import { useEffect, useMemo, useState } from "react";
import { useExtensionQueryParams } from "./hooks/useExtensionQueryParams";
import { useExtensionActions } from "./hooks/useExtensionActions";
import { useExtensionConfiguration } from "./hooks/useConfiguration";
import { useExtensionChannel } from "./hooks/useExtensionChannel";

const useExtension = () => {
  const { data: featuresData, init: initFeatures } = useExtensionFeatures();
  const { data: contextData, init: initContext } = useExtensionContext();
  const { data: channelData, updateChannel } = useExtensionChannel();
  const {
    data: configurationData,
    init: initConfiguration
  } = useExtensionConfiguration();
  const {
    data: viewerData,
    init: initViewer,
    refresh: refreshViewer
  } = useExtensionViewer();

  const bits = useExtensionBits();
  const queryParams = useExtensionQueryParams();
  const actions = useExtensionActions();

  const [clientId, setClientId] = useState("");
  const [helixToken, setHelixToken] = useState("");

  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    let init = false;
    window.Twitch.ext.onAuthorized(({ channelId, clientId, token, userId,helixToken }) => {
      if (!init) {
        init = true;
        initFeatures();
        initContext();
        initViewer();
        initConfiguration();
        updateChannel(channelId);
        setClientId(clientId);
        setHelixToken(helixToken);
      } else {
        refreshViewer();
        setHelixToken(helixToken); // refresh the token if necessary
      }
    });
  }, []);

  const data = useMemo(() => {
    return {
      rig: window.Twitch.ext.rig,
      purchases: window.Twitch.ext.purchases,
      environment: window.Twitch.ext.environment,
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
      configuration: configurationData,
      bits,
      queryParams,
      actions,
      initialized,
      channel: channelData,
      clientId,
      helixToken
    };
  }, [
    configurationData,
    featuresData,
    contextData,
    viewerData,
    initialized,
    bits,
    queryParams,
    actions,
    channelData
  ]);

  useEffect(() => {
    if (!initialized) setInitialized(true);
  }, [data]);

  return data;
};

export { ExtensionProvider, useExt } from "./Provider";

export {
  useExtension,
  useExtensionBits,
  useExtensionContext,
  useExtensionFeatures,
  useExtensionViewer,
  useExtensionQueryParams,
  useExtensionActions
};

export * from "./types";
