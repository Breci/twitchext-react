import { useMemo, useState } from "react";
import { TwitchExtChannel } from "../types/channel";

export const useExtensionChannel = () => {
  const [channelId, setChannelId] = useState("");

  const channel = useMemo<TwitchExtChannel & { initialized: boolean }>(
    () => ({
      id: channelId,
      initialized: !!channelId
    }),
    [channelId]
  );

  return {
    updateChannel: setChannelId,
    data: channel
  };
};
