import { cn } from '../../utils/cn';

export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-border-subtle", className)}
      {...props}
    />
  );
}

export function CardSkeleton({ className, ...props }) {
  return (
    <div className={cn("p-6 flex flex-col gap-4 border border-border rounded-lg bg-surface-raised", className)} {...props}>
      <Skeleton className="h-6 w-1/3" />
      <div className="space-y-2 mt-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="mt-auto pt-6 flex gap-3">
        <Skeleton className="h-8 w-24 rounded-full" />
        <Skeleton className="h-8 w-20 rounded-full" />
      </div>
    </div>
  );
}
