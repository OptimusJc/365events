const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`${className} bg-gray-100 border border-gray-300 rounded-lg p-6 relative`}
    >
      {children}
    </div>
  );
};

export default Card;
