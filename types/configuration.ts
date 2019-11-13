export interface TwitchExtConfiguration extends TwitchExtConfigurationData {
  onChanged: (callback: () => void) => void;
  set: (segment: "broadcaster", version: string, content: string) => void;
}

export interface TwitchExtConfigurationData {
  broadcaster?: { version: string; content: string };
  developer?: { version: string; content: string };
  global?: { version: string; content: string };
}
