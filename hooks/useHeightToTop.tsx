import { useState, useEffect } from "react"
import { throttle } from "../util/util"

const useHeightToTop = (updateInterval = 200): number => {

  const [heightToTop, setHeightToTop] = useState(0)

  useEffect(() => {
    const handleScroll = throttle(() => {
      setHeightToTop(window.pageYOffset)
    }, updateInterval)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [heightToTop])

  return heightToTop
}

export default useHeightToTop
