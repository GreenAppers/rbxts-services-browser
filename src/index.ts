export interface Instance extends Record<string, any> {
  FindFirstChild<X>(name: string): X | undefined;
  Name: string
  Parent?: Instance
  Destroy: () => void
}

export const Players: Instance = {
  FindFirstChild: (name) => undefined,
  Name: 'Players',
  Destroy: () => {},
}

export const RunService: Instance = {
  FindFirstChild: (name) => undefined,
  Name: 'RunService',
  Destroy: () => {},
}

export const SoundService: Instance = {
  FindFirstChild: (name) => undefined,
  Name: 'SoundService',
  Destroy: () => {},
}

export const UserInputService: Instance = {
  FindFirstChild: (name) => undefined,
  Name: 'UserInputService',
  Destroy: () => {},
}
