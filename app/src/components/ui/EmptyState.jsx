import { cn } from '../../utils/cn';
import { Card } from './Card';
import { Button } from './Button';

export function EmptyState({ 
  title, 
  description, 
  actionLabel, 
  onAction, 
  icon,
  className 
}) {
  return (
    <Card className={cn("flex flex-col items-center justify-center p-12 text-center bg-surface-raised border-dashed border-2", className)}>
      {icon ? (
        <div className="mb-5 text-content-tertiary bg-surface p-4 rounded-full border border-border shadow-sm">
          {icon}
        </div>
      ) : (
        <div className="mb-5 text-content-tertiary bg-surface p-4 rounded-full border border-border shadow-sm">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
      )}
      <h3 className="font-display text-xl font-semibold text-content mb-2">{title}</h3>
      <p className="text-content-secondary text-sm max-w-sm mb-6">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="secondary">
          {actionLabel}
        </Button>
      )}
    </Card>
  );
}

