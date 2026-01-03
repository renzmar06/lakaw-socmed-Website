"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Clock, Users } from "lucide-react";
import { DayPicker, DayPickerProps, ClassNames } from "react-day-picker";
import { isSameDay } from "date-fns";

import { cn } from "@/app/utils/utils";
import { buttonVariants } from "@/app/components/Button";

interface CalendarProps {
  className?: string;
  classNames?: Partial<ClassNames>;
  showOutsideDays?: boolean;
}

type Props = CalendarProps & DayPickerProps;

const Calendar = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      classNames,
      showOutsideDays = true,
      ...props
    },
    ref
  ) => {

    return (
      <div
        ref={ref}
        className={cn(
          "p-6 bg-white rounded-[2rem] shadow-xl border border-slate-100 w-fit",
          className
        )}
      >
        <DayPicker
          showOutsideDays={showOutsideDays}
          className={cn("p-3", className)}
          classNames={{
            disabled: "text-muted-foreground opacity-20", 
            months: "flex flex-col space-y-4 text-black",
            month: "space-y-6",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "flex items-center gap-2",
            nav_button: cn(
              buttonVariants({ variant: "outline" }),
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
            ),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            /* ===== Table ===== */
            month_grid: "w-full border-collapse",
            weekdays: "flex w-full justify-between mb-2",
            weekday: "w-11 text-center text-[0.85rem] font-medium uppercase text-slate-400",
            week: "flex w-full justify-between mt-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell:
              "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: cn(
                buttonVariants({ variant: "ghost" }),
                "h-11 w-11 p-0 font-bold rounded-xl transition-all",
                // ✅ AVAILABLE DAYS → BLACK
                "text-black",
                // hover state
                "hover:bg-slate-100 hover:text-black",
                // Disabled logic styling
                "aria-disabled:text-slate-200 aria-disabled:bg-slate-50 aria-disabled:opacity-100 aria-disabled:pointer-events-none aria-disabled:font-medium"
            ),
            day_range_end: "day-range-end",
            day_selected:
              "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside:
              "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle:
              "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
            ...classNames,
          }}
          components={{
            IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
            IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
          } as any}
          {...props}
        />
      </div>
    );
  }
);

Calendar.displayName = "Calendar";

export { Calendar };