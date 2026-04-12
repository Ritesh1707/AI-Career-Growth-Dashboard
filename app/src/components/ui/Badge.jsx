import { cn } from '../../utils/cn';

export function Badge({ children, variant = 'default', className, ...props }) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-body transition-colors duration-fast';
  
  const variants = {
    default: 'bg-surface-raised text-content border border-border',
    accent: 'bg-accent-subtle text-accent border border-accent/20',
    success: 'bg-success-subtle text-success border border-success/20',
    warning: 'bg-warning-subtle text-warning border border-warning/20',
    danger: 'bg-danger-subtle text-danger border border-danger/20',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
