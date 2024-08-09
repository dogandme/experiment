const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button className='px-2 py-2' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
