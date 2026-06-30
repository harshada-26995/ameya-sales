import { useEffect, useState } from 'react'

export const useCounter = (end: number, duration = 2000, start = 0, active = false) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!active) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * (end - start) + start))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, end, start, duration])

  return count
}
