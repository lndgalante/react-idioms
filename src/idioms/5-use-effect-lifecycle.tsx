import { useEffect, useState } from 'react';

// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

export function UseEffectLifeCycle() {
  const [_loaded, setLoaded] = useState()

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1000)
  }, [])

  const handleClick = () => setClickedTimes(clickedTimes + 1)

  return (
    <div>
      <button onClick={handleClick}>Add Click Count</button>
      <span>
        {clickedTimes}
      </span>
    </div>
  )
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) We can add a new state to keep track of the clicked times and initialize it with 0
2) Initialize with false the _loaded state
3) We need to clear the timeout when the component is unmounted to avoid memory leaks
*/

export function UseEffectLifeCycle() {
  // states
  const [_loaded, setLoaded] = useState<boolean>(false);
  const [clickedTimes, setClickedTimes] = useState<number>(0);

  // effects
  useEffect(() => {
    const timeoutId = setTimeout(() => setLoaded(true), 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // handlers
  const handleClick = () => {
    setClickedTimes((previousClickedTimes) => previousClickedTimes + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Click Count</button>
      <span>{clickedTimes}</span>
    </div>
  );
}
