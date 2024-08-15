const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      style={{
        backgroundColor: 'gray',
        padding: '1rem',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
