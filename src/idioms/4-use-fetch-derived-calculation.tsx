import { useMemo, useState } from 'react';

// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

export function UseEffectDerivedCalculation(object) {
  const [isEven, setIs] = useState()
  const [clickedTimes, setClickedTimes] = useState()

  useEffect(() => {
    setReminder(clickedTimes % 5)
  }, [clickedTimes])

  const handleClick = () => setClickedTimes(clickedTimes + 1)

  return (
    <div>
      <button onClick={handleClick}>Add Click Count</button>
      <span>
        {sum}
      </span>
    </div>
  )
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) The "isEven" react state is not being used so we can safely remove it
2) The "object" parameter is not being used so we can safely remove it

3) We can replace the useEffect with a useMemo to calculate the reminder of the clickedTimes
4) We need to initialized clickTimes with 0 since for the first render it will be undefined

5) As a good practices we can use the useState callback to get the previous state value in the handleClick handler
6) Optionally we can render the reminder since it's not being shown in the original component
*/

export function UseEffectDerivedCalculation() {
  // states
  const [clickedTimes, setClickedTimes] = useState<number>(0);

  // memos
  const reminder = useMemo(() => clickedTimes % 5, [clickedTimes]);

  // handlers
  const handleClick = () => {
    setClickedTimes((previousClickedTimes) => previousClickedTimes + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Click Count</button>
      <p>{clickedTimes}</p>
      <p>Reminder of {clickedTimes} % 5 is {reminder}</p>
    </div>
  );
}
