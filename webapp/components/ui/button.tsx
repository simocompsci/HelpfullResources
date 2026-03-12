import * as React from "react"

import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

const baseClasses =
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-black text-white hover:bg-gray-900 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90",
  outline:
    "border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
  ghost:
    "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-11 px-6 rounded-full text-sm",
  sm: "h-9 px-4 rounded-full text-xs",
  lg: "h-12 px-7 rounded-full text-base",
  icon: "h-10 w-10 rounded-full",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        data-slot="button"
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    )
  },
)

Button.displayName = "Button"

export { Button }

