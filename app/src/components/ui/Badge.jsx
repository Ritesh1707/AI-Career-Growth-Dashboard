import { cn } from '../../utils/cn';

export function Badge({ children, variant = 'default', className, ...props }) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-body transition-colors duration-fast';
  
  const variants = {
    default: 'bg-surface-raised text-content border border-border',
    accent: 'bg-accent-subtle text-accent border border-transparent',
    success: 'bg-success-subtle text-success border border-transparent',
    warning: 'bg-warning-subtle text-warning border border-transparent',
    danger: 'bg-danger-subtle text-danger border border-transparent',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
