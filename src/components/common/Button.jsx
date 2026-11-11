export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  target,
  rel,
  ...props
}) => {
  const buttonClasses = `btn btn-${variant} btn-${size} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <span className="btn-icon">{Icon}</span>}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <span className="btn-icon">{Icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};
