"use client";
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Add type for inputs
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}