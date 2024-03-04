import { memo, useEffect, useState } from 'react';

// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇


async function fetchRecords() {
  return [{ id: 1, type: 'record' }];
}
async function fetchAlternateRecords() {
  return [{ id: 1, type: 'alt-record' }];
}

// Hint: part of the rendering structure is re-rendered frequently unnecessarily
export function UnoptimizableRenderingStructure(altRecords) {
  const [records, setRecords] = useState([]);

  useEffect(async function loadRecords() {
    const interval = setInterval(async () => {
      const recs = await fetchRecords();
      setRecords(recs);
    }, 5000);
    clearInterval(interval);
  }, []);

  return (
    <div>
      <ul>
        {records.map((rec) => (
          <li key={rec.id}>{rec.id}</li>
        ))}
      </ul>
      <ul>
        {altRecords.map((rec) => (
          <li key={rec.id}>{rec.id}</li>
        ))}
      </ul>
    </div>
  );
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) Based on the hint provided, the li items for altRecords are re-rendered unnecessarily
2) To fix this, we can create and memoize a AltRecords component, we will call it MemoAltRecords

3) We can improve some other stuff like removing the async keyword from the useEffect callback, and move the clearInterval call to the cleanup function
*/

type Record = {
  id: number;
  type: string;
};

async function fetchRecords(): Promise<Record[]> {
  return [{ id: 1, type: 'record' }];
}

// add memo for AltRecords
function AltRecords({ altRecords }: { altRecords: Record[] }) {
  return (
    <ul>
      {altRecords.map((rec) => (
        <li key={rec.id}>{rec.id}</li>
      ))}
    </ul>
  );
}

const MemoAltRecords = memo(AltRecords);

export function UnoptimizableRenderingStructure({ altRecords }: { altRecords: Record[] }) {
  // states
  const [records, setRecords] = useState<Record[]>([]);

  // effects
  useEffect(function loadRecords() {
    const intervalId = setInterval(async () => {
      const records = await fetchRecords();
      console.log('\n ~ intervalId ~ records:', records)
      setRecords(records);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <ul>
        {records.map((rec) => (
          <li key={rec.id}>{rec.id}</li>
        ))}
      </ul>
      <MemoAltRecords altRecords={altRecords} />
    </div>
  );
}
