import {
  ExtensionAnchor,
  ExtensionMode,
  ExtensionOutState,
  ExtensionPlatform,
  ExtensionState
} from "../types/";

export const useExtensionQueryParams = () => {
  const params = new URLSearchParams(window.location.search);

  return {
    anchor: params.get("anchor") as ExtensionAnchor | null,
    language: params.get("language"),
    locale: params.get("locale"),
    mode: params.get("mode") as ExtensionMode | null,
    platform: params.get("platform") as ExtensionPlatform | null,
    popout: params.get("popout") === ExtensionOutState.True,
    state: params.get("state") as ExtensionState
  };
};
