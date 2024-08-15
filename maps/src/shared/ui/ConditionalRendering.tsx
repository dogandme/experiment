interface ConditionalRenderingProps {
  condition: boolean | (() => boolean);
  on: JSX.Element | (() => JSX.Element);
  off: JSX.Element | (() => JSX.Element);
}

const ConditionalRendering = ({
  condition,
  on,
  off,
}: ConditionalRenderingProps) => {
  return condition
    ? typeof on === 'function'
      ? on()
      : on
    : typeof off === 'function'
      ? off()
      : off;
};

export default ConditionalRendering;
