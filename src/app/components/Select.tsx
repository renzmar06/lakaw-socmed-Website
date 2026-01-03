"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from "react";

interface SelectContextType {
  value: string;
  label: string;
  setValue: (val: string, label?: string) => void;
}

const SelectContext = createContext<SelectContextType | undefined>(undefined);

interface SelectProps {
  value: string;
  onValueChange: (val: string) => void;
  children: (props: { open: boolean; setOpen: (open: boolean) => void }) => ReactNode;
}

export function Select({ value, onValueChange, children }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("");

  const handleSelect = (val: string, label?: string) => {
    onValueChange(val);
    if (label) setLabel(label);
    setOpen(false);
  };

  return (
    <SelectContext.Provider value={{ value, label, setValue: handleSelect }}>
      <div className="relative inline-block w-full">
        {children({ open, setOpen })}
      </div>
    </SelectContext.Provider>
  );
}

interface SelectTriggerProps {
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
}

export function SelectTrigger({ children, open, setOpen, className }: SelectTriggerProps) {
  return (
    <button
      type="button"
      className={`w-full text-left px-4 py-2 border bg-white rounded-xl ${className || ""}`}
      onClick={() => setOpen(!open)}
    >
      {children}
    </button>
  );
}

interface SelectValueProps {
  placeholder?: string;
}

export function SelectValue({ placeholder }: SelectValueProps) {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error("SelectValue must be used inside Select");
  return <span>{ctx.label || placeholder}</span>;
}

interface SelectContentProps {
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
}

export function SelectContent({ children, open, setOpen, className }: SelectContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={`absolute mt-1 w-full bg-white border rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto ${className || ""}`}
    >
      {children}
    </div>
  );
}

interface SelectItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function SelectItem({ value, children, className }: SelectItemProps) {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error("SelectItem must be used inside Select");

  const handleClick = () => {
    ctx.setValue(value, typeof children === "string" ? children : undefined);
  };

  return (
    <div
      className={`px-4 py-2 cursor-pointer hover:bg-slate-100 ${className || ""}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
