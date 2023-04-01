import * as SeparatorPrimitive from "@radix-ui/react-separator";
import React from "react";

import { clsx } from "../utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...properties },
    reference
  ) => (
    <SeparatorPrimitive.Root
      ref={reference}
      decorative={decorative}
      orientation={orientation}
      className={clsx(
        "bg-slate-200 dark:bg-slate-700",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...properties}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
