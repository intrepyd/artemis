import { type ClassValue, clsx as classnames } from "clsx";
import { twMerge } from "tailwind-merge";

export function clsx(...inputs: ClassValue[]) {
  return twMerge(classnames(inputs));
}
