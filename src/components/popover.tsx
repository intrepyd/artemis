import * as PopoverPrimitive from "@radix-ui/react-popover";
import React from "react";

import { clsx } from "../utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(
  (
    { className, align = "center", sideOffset = 4, ...properties },
    reference
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={reference}
        align={align}
        sideOffset={sideOffset}
        className={clsx(
          "z-50 w-72 rounded-md border border-slate-100 bg-white p-4 shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-800",
          className
        )}
        {...properties}
      />
    </PopoverPrimitive.Portal>
  )
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverContent, PopoverTrigger };
