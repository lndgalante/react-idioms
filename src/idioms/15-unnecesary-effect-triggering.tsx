import { useEffect, useState } from 'react';

// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

async function fetchLeader() { return { name: 'Messi' }}
async function fetchDetails(leader) { return { ...leader, country: 'Argentina' }}

// Hint: this only requires a single line change!
export function UnnecessaryEffectTriggering() {
  const [leader, setLeader] = useState({})

  useEffect(() => {
    const interval = setInterval(async () => {
      const leader = await fetchLeader()
      setLeader(leader)
    }, 1000)
    clearInterval(interval)
  }, [])

  useEffect(async function enhanceRecord() {
    const enriched = await fetchDetails(leader)
    setLeader(enriched)
  }, [leader])

  return(
    <div>
      <div>Leader:{leader.name}</div>
      {leader.country && <div>{`From: ${leader.country}`}</div>}
    </div>
  )
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Solution 👇

1) Single line change: let's move the clearInterval to the cleanup function of the first useEffect
2) Another necessary change to do is to avoid the async keyword in the second useEffect, since it's not supported, we can use a simple .then.catch promise chain
*/


async function fetchLeader() { return { name: 'Messi' } }
async function fetchDetails(leader) { return { ...leader, country: 'Argentina' } }

export function UnnecessaryEffectTriggering() {
  const [leader, setLeader] = useState({})

  useEffect(() => {
    const interval = setInterval(async () => {
      const leader = await fetchLeader()
      setLeader(leader)
    }, 1000)

    return () => {
      clearInterval(interval)

    }
  }, [])

  useEffect(function enhanceRecord() {
    fetchDetails(leader).then((enriched) => setLeader(enriched))
  }, [leader])

  return (
    <div>
      <div>Leader:{leader.name}</div>
      {leader.country && <div>{`From: ${leader.country}`}</div>}
    </div>
  )
}
