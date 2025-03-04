"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Calendar,
  Event,
  ToolbarProps,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import { twMerge } from "tailwind-merge";

// Set up the localizer for moment
const localizer = momentLocalizer(moment);

// Busy dates (March 14, 15, 16)
const busyDates = [
  new Date(2025, 2, 28), // March 28, 2025
  new Date(2025, 2, 29), // March 29, 2025
  new Date(2025, 3, 4), // April 4, 2025
];

const CustomToolbar = (toolbar: ToolbarProps) => {
  const goToPrevious = () => {
    toolbar.onNavigate("PREV");
  };

  const goToNext = () => {
    toolbar.onNavigate("NEXT");
  };

  const goToToday = () => {
    toolbar.onNavigate("TODAY");
  };

  return (
    <div className="flex items-center justify-center gap-10 mb-4 border-[#562C2C4D]">
      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="px-4 py-2 text-white rounded-lg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.07999"
            stroke="#F2542D"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Current Month/Year */}
      <span className="text-lg font-semibold">
        {moment(toolbar.date).format("MMMM YYYY")}
      </span>

      {/* Next Button */}
      <button onClick={goToNext} className="px-4 py-2 text-white rounded-lg">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999"
            stroke="#F2542D"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Today Button */}
    </div>
  );
};

interface CalendarProps {
  events: Event[];
  updateEvents: Dispatch<SetStateAction<Event[]>>;
}

const CalendarComponent = ({ events, updateEvents }: CalendarProps) => {
  const handleBook = (value: Date) => {
    const hasEvent = events
      ?.map((e) => e.start)
      .some((e) => moment(e).isSame(value, "day"));
    if (hasEvent) {
      return updateEvents(
        events?.filter((event) => !moment(event.start).isSame(value, "day"))
      );
    }
    return updateEvents([
      ...(events || []),
      { start: value, end: value, allDay: true, title: "Booking" },
    ]);
  };

  console.log(events);
  return (
    <div className="md:h-[700px] h-[500px] md:p-10 p-2 border border-brown-coffee/30 shadow-brown-coffee/10 shadow-xl rounded-2xl">
      <Calendar
        localizer={localizer}
        defaultDate={new Date(2025, 2, 1)} // March 2025
        defaultView="month"
        views={["month"]}
        className="bg-white"
        events={events}
        components={{
          toolbar: CustomToolbar,

          dateCellWrapper: ({ children, value }) => {
            const isBusy = busyDates.some((busyDate) =>
              moment(busyDate).isSame(value, "day")
            );
            const isPrevMonth = moment(value).isBefore(moment(), "date");

            const hasEvent = events
              ?.map((e) => e.start)
              .some((e) => moment(e).isSame(value, "day"));

            return (
              <div
                onClick={
                  isBusy || isPrevMonth ? undefined : () => handleBook(value)
                }
                className={twMerge(
                  "bg-seashell flex cursor-pointer border border-main-orange flex-col items-center justify-center h-full w-full lg:p-4 rounded-lg shadow-sm text-center",
                  isBusy &&
                    " text-spanish-gray bg-white cursor-not-allowed border-light-silver",
                  isPrevMonth &&
                    "bg-cultured text-silver border-light-silver justify-start",
                  hasEvent && "bg-main-orange text-white"
                )}
              >
                <p className="font-bold"> {moment(value).format("DD")}</p>
                {!isPrevMonth && (
                  <p
                    className={twMerge(
                      "hidden md:block",
                      isBusy ? "text-light-silver" : "text-main-orange",
                      hasEvent && "text-white"
                    )}
                  >
                    {" "}
                    {isBusy ? "Occupe" : "Libre"}
                  </p>
                )}
              </div>
            );
          },
        }}
      />
    </div>
  );
};

export default CalendarComponent;
