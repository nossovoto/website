import { useEffect, useState } from "react"
import useHeightToTop from "hooks/useHeightToTop"
import style from "./alertBox.module.scss"

// TODO DEPRECATED

const types = ["success", "info", "warn", "error"]

const AlertBox = ({ show, close, message, type }) => {
  const [height, setHeight] = useState(useHeightToTop())

  const typeString = types.indexOf(type) > -1 ? type : "default"

  useEffect(() => {
    setHeight(height + 50)
    const interval = setInterval(() => {
      close()
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    show && (
      <div
        className={`alert-box-display ${typeString}`}
        style={{ top: `${height}px` }}
      >
        <div className="alert-box-close" onClick={close}>
          x
        </div>
        <div className="alert-box-message">{message}</div>
      </div>
    )
  )
}

export default AlertBox
