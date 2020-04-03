import "./backToTop.scss"
import useHeightToTop from "../../hooks/useHeightToTop";
import { useState, useEffect } from 'react'
import { backToTop } from "../../../public/js/util";

const default_y_offset = 350;
const updateInterval = 100

const BackToTop = () => {


  let heightToTop = useHeightToTop(updateInterval);
  const [state, setstate] = useState(false)

  useEffect(() => {
    if (heightToTop >= default_y_offset)
      setstate(true)
    return () => {
      if (heightToTop < default_y_offset)
        setstate(false)
    };
  }, [heightToTop])

  return (
    <>
      {state &&
        <div className="back-to-top" onClick={() => backToTop()}>
          &#708;
        </div >
      }
    </>
  )
}

export default BackToTop;