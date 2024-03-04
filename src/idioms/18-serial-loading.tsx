import { useEffect, useState } from "react";

// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

async function fetchRecords() { return [{id: 1, type: 'record'}]}
async function fetchAlternateRecords() { return [{ id: 1, type: 'alt-record' }]}

export function SerialLoading() {

  const [records, setRecords] = useState([])
  const [altRecords, setAltRecords] = useState([])

  useEffect(async function loadRecords() {
    const recs = await fetchRecords()
    const altRecs = await fetchAlternateRecords()
    setRecords(recs)
    setAltRecords(altRecs)
  }, [])

  return(
    <div>
      {records.map(rec => <div key={rec.id}></div>)}
      {altRecords.map(rec => <div key={rec.id}></div>)}
    </div>
  )
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) Since these 2 fetch functions are independent, we can call them in parallel, and use Promise.all and then to set the state
2) We can add proper types to the records and altRecords states and fetch functions
*/

type Record = {
  id: number;
  type: string;
};

async function fetchRecords(): Promise<Record[]> {
  return [{ id: 1, type: 'record' }];
}
async function fetchAlternateRecords(): Promise<Record[]> {
  return [{ id: 1, type: 'alt-record' }];
}

export function SerialLoading() {
  // states
  const [records, setRecords] = useState<Record[]>([]);
  const [altRecords, setAltRecords] = useState<Record[]>([]);

  // effects
  useEffect(function loadRecords() {
    Promise.all([fetchRecords(), fetchAlternateRecords()]).then(
      ([recs, altRecs]) => {
        setRecords(recs);
        setAltRecords(altRecs);
      }
    ).catch(console.error);
  }, []);

  return (
    <div>
      {records.map((record) => (
        <div key={record.id}>{record.type}</div>
      ))}
      {altRecords.map((record) => (
        <div key={record.id}>{record.type}</div>
      ))}
    </div>
  );
}
