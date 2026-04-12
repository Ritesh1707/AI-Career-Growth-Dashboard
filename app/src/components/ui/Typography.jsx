import { cn } from '../../utils/cn';

export function Heading({ children, level = 1, className, ...props }) {
  const Tag = `h${level}`;
  
  const baseStyles = 'font-display font-bold text-content tracking-tight';
  const sizes = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  };

  return (
    <Tag className={cn(baseStyles, sizes[level], className)} {...props}>
      {children}
    </Tag>
  );
}

export function Text({ children, variant = 'body', className, ...props }) {
  const baseStyles = 'font-body';
  
  const variants = {
    body: 'text-base text-content',
    muted: 'text-base text-content-secondary',
    small: 'text-sm text-content-secondary',
    lead: 'text-lg text-content-secondary',
  };

  return (
    <p className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </p>
  );
}
