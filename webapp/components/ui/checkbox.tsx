import * as React from "react"

import { cn } from "@/lib/utils"

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        data-slot="checkbox"
        className={cn(
          "peer h-4 w-4 shrink-0 cursor-pointer rounded-sm border border-input bg-background text-primary shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
          "checked:bg-black checked:text-white checked:border-black dark:checked:bg-primary dark:checked:border-primary",
          className,
        )}
        {...props}
      />
    )
  },
)

Checkbox.displayName = "Checkbox"

export { Checkbox }

