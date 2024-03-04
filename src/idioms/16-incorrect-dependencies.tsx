
// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

async function trackClick(ids) { return ids }

// Hint: same error pattern as above
export function IncorrectDependencies(records) {
  const handleClick = useCallback(() => {
    trackClick(records);
  }, [records]);

  return(
    <div>
      {records.map(record => <div id={record.id}>{record.name}</div>)}
      <button onClick={handleClick}>Click me!</button>
    </div>
  )
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1)
*/
