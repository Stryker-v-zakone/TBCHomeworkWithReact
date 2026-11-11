export const Badge = ({
  children,
  variant = 'primary',
  icon: Icon,
  className = '',
  onClick,
  ...props
}) => {
  return (
    <span
      className={`badge badge-${variant} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {Icon && <span className="badge-icon">{Icon}</span>}
      {children}
    </span>
  );
};
