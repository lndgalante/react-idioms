// ---------------------------------------------------------------------------------------------------------------------

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
2) We can move the calendarDays outside the component and use it as a constant, so it is not re-declared on every render

3) Optionally we can use MACRO_CASE for the calendarDays constant to indicate that it is a constant
4) Optionally we can use the as const assertion to indicate that the array is a readonly tuple
5) Also we can rename the val variable to day to make it more descriptive
*/

const CALENDAR_DAYS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
] as const;

export function CrudeDeclarations() {
  return (
    <ol>
      {CALENDAR_DAYS.map((day) => (
        <li key={day}>{day}</li>
      ))}
    </ol>
  );
}
