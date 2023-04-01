import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";

import { clsx } from "../utils";

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...properties }, reference) => (
  <LabelPrimitive.Root
    ref={reference}
    className={clsx(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...properties}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
