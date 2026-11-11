export const Card = ({
  children,
  className = '',
  hoverable = true,
  glow = false,
  as: Component = 'div',
  onClick,
  ...props
}) => {
  const classes = [
    'custom-card',
    hoverable ? 'card-hoverable' : '',
    glow ? 'card-glow' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} onClick={onClick} {...props}>
      {children}
    </Component>
  );
};
