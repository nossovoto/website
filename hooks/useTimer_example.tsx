import { useState, useEffect } from "react"

interface ITimer {
  seconds: number
  toggle: () => void
  reset: () => void
}

const useTimer = (): ITimer => {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  function toggle() {
    setIsActive(!isActive)
  }

  function reset() {
    setSeconds(0)
    setIsActive(false)
  }

  useEffect(() => {
    let interval = null
    if (isActive)
    {
      interval = setInterval(() => {
        setSeconds(seconds + 1)
      }, 1000)
    } else if (!isActive && seconds !== 0)
    {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  return { seconds, toggle, reset }
}

export default useTimer
