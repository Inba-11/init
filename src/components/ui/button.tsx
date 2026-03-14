import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-card hover:bg-primary/90 hover:shadow-hero hover:-translate-y-0.5 active:translate-y-0 active:shadow-card transition-all duration-200",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-card/40 hover:bg-accent hover:text-accent-foreground hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0 active:shadow-card transition-all duration-200",
        secondary:
          "bg-secondary text-secondary-foreground shadow-card/40 hover:bg-secondary/80 hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0 active:shadow-card transition-all duration-200",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:shadow-card/60 hover:-translate-y-0.5 active:translate-y-0 active:shadow-card/30 transition-all duration-200",
        link: "text-primary underline-offset-4 hover:underline",
        hero:
          "bg-gradient-primary text-primary-foreground shadow-hero hover:opacity-95 hover:shadow-[0_26px_80px_-20px_hsl(18,88%,60%,0.85)] hover:-translate-y-1 active:translate-y-0 active:shadow-hero font-semibold transition-all duration-200",
        heroOutline:
          "border-2 border-primary-foreground/30 text-primary-foreground/90 bg-background/10 shadow-card/60 hover:bg-primary-foreground/10 hover:border-primary/70 hover:text-primary-foreground font-semibold backdrop-blur-md hover:-translate-y-1 hover:shadow-card-hover active:translate-y-0 active:shadow-card transition-all duration-200",
        accent:
          "bg-gradient-accent text-accent-foreground font-semibold shadow-card hover:shadow-[0_22px_70px_-18px_hsl(245,72%,64%,0.7)] hover:-translate-y-1 active:translate-y-0 active:shadow-card transition-all duration-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
