import { useEffect, useState } from 'react';

// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

export function DirtyUnmount() {
  const [time, setTime] = useState(0);

  useEffect(() =>{
    setInterval(() => {
      setTime(t => t + 1)
    }, 1000)
  }, [])

  return (
    <div>
      Clock in seconds: {time}
    </div>
  )
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) Let's save the intervalId returned by setInterval to a variable and call clearInterval when the component is unmounted
2) Assign number type to the useState
3) Improve parameter naming in the setTime callback from "t" to "previousTime"
*/

export function DirtyUnmount() {
  // states
  const [time, setTime] = useState<number>(0);

  // effects
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((previousTime) => previousTime + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>Clock in seconds: {time}</div>;
}
