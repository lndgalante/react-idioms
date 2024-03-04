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

1) Let's do a single useEffect to fetch the leader and its details afterwards
*/

type Leader = {
  name: string,
  country?: string
}

async function fetchLeader(): Promise<Leader> { return { name: 'Messi' } }
async function fetchDetails(leader: Leader): Promise<Leader> { return { ...leader, country: 'Argentina' } }

export function UnnecessaryEffectTriggering() {
  // states
  const [leader, setLeader] = useState<Leader | null>(null)
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  // effects
  useEffect(() => {
    async function fetchLeaderAndDetails() {
      setStatus('loading')

      try {
        const leader = await fetchLeader()
        const enriched = await fetchDetails(leader)


        setStatus('success')
        setLeader({ ...leader, ...enriched })
      } catch (error) {
        setStatus('error')
      }
    }

    fetchLeaderAndDetails()
  }, [])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'error') {
    return <div>Try again later</div>
  }

  return (
    <div>
      {leader ? (<>
        <div>Leader:{leader.name}</div>
        {leader.country && <div>{`From: ${leader.country}`}</div>}
      </>) : null}
    </div>
  )
}
