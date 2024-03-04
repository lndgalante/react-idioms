// ---------------------------------------------------------------------------------------------------------------------

import { useMemo } from "react";

/* Problem 👇

export function CrudeDeclarations() {
  const calendarDays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  return (<ol>
    {calendarDays.map((val) => <span key={val}>{val}</span>)}
  </ol>)
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) Mapping over calendarDays return a span element, which is not a valid child of the ol element, so we need an li element in this case
2) Let's create a function that returns the current calendar days and memoize it to avoid unnecessary re-renders

*/


function getCurrentCalendarDays() {
  const date = new Date();
  const [year, month] = [date.getFullYear(), date.getMonth()]

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
}

export function CrudeDeclarations() {
  const calendarDays = useMemo(() => getCurrentCalendarDays(), []);

  return (
    <ol>
      {calendarDays.map((day) => (
        <li key={day}>{day}</li>
      ))}
    </ol>
  );
}
