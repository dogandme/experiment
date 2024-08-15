const Button = ({
  children,
  onClick,
  styles,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  styles?: React.CSSProperties;
}) => {
  return (
    <button
      style={{
        backgroundColor: 'gray',
        padding: '1rem',
        ...styles,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

const ConditionalFactory = ({
  condition,
  on,
  off,
}: {
  condition: boolean | (() => boolean);
  on: JSX.Element;
  off: JSX.Element;
}) => {
  if (typeof condition === 'function') {
    return condition() ? on : off;
  }
  return condition ? on : off;
};

const IterationalRenderring = () => {};
