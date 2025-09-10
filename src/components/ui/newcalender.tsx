"use client";
import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";


interface CalendarProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  minDate?: Dayjs | null;
  maxDate?: Dayjs | null;
  disableFuture?: boolean;
  disablePast?: boolean;
}

export default function Calendar({
  value,
  onChange,
  minDate,
  maxDate,
  disableFuture,
  disablePast,
}: CalendarProps) {
  return (
    <div className="bg-gray-500 p-0 m-0 rounded-[4px] w-full h-full max-w-md">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>
          <div className="rounded-lg p-0 overflow-hidden">
            <DateCalendar
              value={value}
              onChange={onChange}
              minDate={minDate ?? undefined}
              maxDate={maxDate ?? undefined}
              disableFuture={disableFuture}
              disablePast={disablePast}
            />
          </div>
        </div>
      </LocalizationProvider>
    </div>
  );
}
