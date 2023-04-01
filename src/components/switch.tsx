import * as SwitchPrimitives from "@radix-ui/react-switch";
import React from "react";

import { clsx } from "../utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...properties }, reference) => (
  <SwitchPrimitives.Root
    className={clsx(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=unchecked]:bg-slate-200 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=checked]:bg-slate-400 dark:data-[state=unchecked]:bg-slate-700",
      className
    )}
    {...properties}
    ref={reference}
  >
    <SwitchPrimitives.Thumb
      className={clsx(
        "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
