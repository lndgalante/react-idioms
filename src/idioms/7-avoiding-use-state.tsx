import { useEffect, useState } from 'react';

// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

export function AvoidingUseState(object) {
  const ref = useRef('Unmounted');

  useEffect(() => {
    ref.current = "Mounted"
  }, [])

  return (
    <div>
      {ref.current}
    </div>
  )
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) The useRef hook will be updated on the component mount but it will not cause a re-render of the component.
2) Most likely we want to use a react state here to show when the component is mounted or unmounted.
3) We can use the useState hook to set the component status to 'Mounted' when the component is mounted in the useEffect.
3) Optionally we can remove the object parameter from the function signature as it is not used in the function body.
*/


export function AvoidingUseState() {
  // states
  const [componentStatus, setComponentStatus] = useState<'Unmounted' | 'Mounted'>('Unmounted');

  // effects
  useEffect(() => {
    setComponentStatus('Mounted')
  }, [])

  return (
    <div>
      {componentStatus}
    </div>
  )
}
