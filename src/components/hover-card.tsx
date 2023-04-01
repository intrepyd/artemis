import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import React from "react";

import { clsx } from "../utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(
  (
    { className, align = "center", sideOffset = 4, ...properties },
    reference
  ) => (
    <HoverCardPrimitive.Content
      ref={reference}
      align={align}
      sideOffset={sideOffset}
      className={clsx(
        "z-50 w-64 rounded-md border border-slate-100 bg-white p-4 shadow-md outline-none animate-in zoom-in-90 dark:border-slate-800 dark:bg-slate-800",
        className
      )}
      {...properties}
    />
  )
);
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardContent, HoverCardTrigger };
