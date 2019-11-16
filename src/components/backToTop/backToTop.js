import "./backToTop.scss"
import useHeightToTop from "../../hooks/useHeightToTop";
import { useState, useEffect } from 'react'
import { throttle } from "../../../public/js/util";

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

  function backToTop() {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }

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