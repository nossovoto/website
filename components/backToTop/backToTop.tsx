import useHeightToTop from "../../hooks/useHeightToTop"
import { useState, useEffect } from 'react'
import { scrollTo } from "../../util/util"
import UpArrowIcon from "../../icons/upArrowIcon"
import style from "./backToTop.module.scss"

const defaultYOffset = 350
const updateInterval = 100

const BackToTop = () => {

  const heightToTop = useHeightToTop(updateInterval)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (heightToTop >= defaultYOffset)
      setShow(true)
    return () => {
      if (heightToTop < defaultYOffset)
        setShow(false)
    }
  }, [heightToTop])

  return (
    <>
      {show &&
        <div className={style.main} onClick={() => scrollTo()}>
          <UpArrowIcon />
        </div >
      }
    </>
  )
}

export default BackToTop