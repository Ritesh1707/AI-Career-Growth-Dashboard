import { cn } from '../../utils/cn';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  disabled,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-body font-medium rounded transition-colors duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-accent text-content-inverse hover:bg-accent-hover shadow-sm',
    secondary: 'bg-surface-raised text-content border border-border hover:border-accent hover:bg-accent-subtle hover:text-accent shadow-sm',
    outline: 'bg-transparent text-content border border-border hover:border-content-secondary hover:text-content-secondary',
    ghost: 'bg-transparent text-content-secondary hover:bg-surface-raised hover:text-content',
    danger: 'bg-danger text-content-inverse hover:opacity-90 shadow-sm'
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
