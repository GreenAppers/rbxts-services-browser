export interface Instance extends Record<string, any> {
  Name: string
  Parent?: Instance
  Destroy: () => void
  FindFirstChild: <X = Instance>(name: string) => X | undefined;
  GetChildren: <X = Instance>(this: Instance) => Array<X>;
  WaitForChild: <X = Instance>(
    this: Instance,
    childName: string | number
  ) => X;
}

const instance: Instance = {
  Name: 'Players',
  Destroy: () => {},
  FindFirstChild: (name) => undefined,
  GetChildren: () => [],
  WaitForChild: (childName) => { throw new Error(''); },
}

export const Players: Instance = {
  ...instance,
  Name: 'Players',
}

export const RunService: Instance = {
  ...instance,
  Name: 'RunService',
}

export const SoundService: Instance = {
  ...instance,
  Name: 'SoundService',
}

export const UserInputService: Instance = {
  ...instance,
  Name: 'UserInputService',
}
