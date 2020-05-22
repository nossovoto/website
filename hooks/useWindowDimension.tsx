import { useState, useEffect } from "react"
import { throttle } from "util/util"

interface IWindowDimension {
  width: number
  height: number
}

const defaultProps: IWindowDimension = {
  width: 0,
  height: 0
}

const useWindowSize = (): IWindowDimension => {

  const [windowSize, setWindowSize] = useState(defaultProps)

  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  useEffect(() => {
    if (!window) return

    const handleResize = throttle(() => {
      setWindowSize(getSize())
    }, 500)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}

export default useWindowSize