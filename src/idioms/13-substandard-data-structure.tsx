import { useState } from 'react';

// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

export function SubstandardDataStructure() {
  const [error, setError] = useState("")

  return(
    <div>
      <button onClick={() => setError('Error A')}>Throw Error A</button>
      <button onClick={() => setError('Error B')}>Throw Error B</button>
      <button onClick={() => setError('')}>Clear Errors</button>
      <div>
        {error}
      </div>
    </div>
  )
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) We can use a better structure to store a list of errors
2) My data structure is an array of errors were each error has an id and a message
3) handleAddError will add a new error to the list of errors with a unique id
4) handleClearErrors will clear the list of errors by setting it to an empty array
5) There are some helper functions "setErrorA" and "setErrorB" to throw error A and B
6) We render this list of errors in the JSX using the map function
7) Optionally for better UX I added a confirmation dialog to clear all errors
*/

type Error = {
  id: string;
  message: string;
};

export function EnhancedErrorHandling() {
  // states
  const [errors, setErrors] = useState<Error[]>([]);

  // handlers
  function handleAddError(message: string): void {
    const newError = { id: crypto.randomUUID(), message };
    setErrors((previousErrors) => [...previousErrors, newError]);
  }

  function handleClearErrors(): void {
    const confirmDeletion = confirm('Are you sure you want to clear all errors?')

    if (confirmDeletion) {
      setErrors([]);
    }
  }

  // helpers
  function setErrorA(): void {
    handleAddError('Error A');
  }

  function setErrorB(): void {
    handleAddError('Error B');
  }

  return (
    <div>
      <button onClick={setErrorA}>Throw Error A</button>
      <button onClick={setErrorB}>Throw Error B</button>
      <button onClick={handleClearErrors}>Clear Errors</button>

      {errors.map((error) => (
        <div key={error.id}>{error.message}</div>
      ))}
    </div>
  );
}
