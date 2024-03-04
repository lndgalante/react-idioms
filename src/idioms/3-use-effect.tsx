import { useEffect, useState } from 'react';

// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

export function UseEffect({ fetchURL, label }) {
  useEffect(async () => {
    await fetch(fetchURL)
  })

  return(
    <div>
      <button>{label}</button>
    </div>
  )
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) We cannot use async functions directly in our useEffect hooks since they return a Promise, and useEffect expects a return of a cleanup function or nothing
2) We can go 2 routes: create an async function within the useEffect or use simple .then() / .catch() callbacks
3) In my case will go for the simpler one which is to use .then()/.catch() callbacks
4) I'll save the data, error, and fetch status on the component state to be able to render them later
5) We need also to add the "fetchURL" prop to the dependency array to avoid infinite loops and to make sure the fetch is called when the prop changes

6) As a good practice we can add an AbortController so if the component gets unmounted the fetch will be aborted to avoid consuming extra resources
7) We can also rename the UseEffect to UseFetchEffect to be more clear about the purpose of the component
*/

type UseEffectProps = {
  fetchURL: string;
  label: string;
};

export function UseFetchEffect({ fetchURL, label }: UseEffectProps) {
  // states
  const [data, setData] = useState<null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');

  // effects
  useEffect(() => {
    const abortController = new AbortController();

    setStatus('loading');
    fetch(fetchURL, { signal: abortController.signal })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setStatus('success');
      })
      .catch((error) => {
        if (error.name === 'AbortError') return;

        setError(error);
        setStatus('error');
      });

    return () => {
      abortController.abort();
    };
  }, [fetchURL]);

  // logs
  console.log('\n ~ UseFetchEffect ~ status:', status);
  console.log('\n ~ useEffect ~ data:', data);

  if (status === 'idle') {
    return <div>About to fetch your {fetchURL} data</div>;
  }

  if (status === 'error') {
    return <div>Error: {error?.message}</div>;
  }

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button>{label}</button>
    </div>
  );
}
