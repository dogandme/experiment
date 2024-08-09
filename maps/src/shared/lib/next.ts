type ServerEnvironment = typeof globalThis;

export const getEnvironment = (): ServerEnvironment | Window => {
  return global;
};

export const isWindow = (env: ServerEnvironment | Window): env is Window => {
  return env !== null;
};

export const isServer = (
  env: ServerEnvironment | Window,
): env is ServerEnvironment => {
  return env === null;
};
