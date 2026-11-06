import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

// Values follow DESIGN.md: radius/button, spacing/button/*, size/button/*,
// typography/button/label, opacity/button/disabled and the button focus ring.
// xs/sm padding and label size are not in DESIGN.md (only their heights are).
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-button-gap rounded-button border border-transparent bg-clip-padding font-sans text-button-label whitespace-nowrap transition-all outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-35 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:stroke-[1.5] [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border-on-light bg-transparent text-foreground hover:bg-muted aria-expanded:bg-muted",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/70 aria-expanded:bg-secondary",
        ghost:
          "text-foreground hover:bg-muted aria-expanded:bg-muted",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/85",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-button-padding-x py-button-padding-y",
        xs: "h-7 gap-1.5 px-3 text-label-default [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-2 px-4 text-body-14-auto",
        lg: "h-14 px-button-padding-x py-button-lg-padding-y [&_svg:not([class*='size-'])]:size-5",
        icon: "size-12",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9",
        "icon-lg": "size-14 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
