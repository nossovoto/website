import useHeightToTop from "../../hooks/useHeightToTop";
import { useState, useEffect } from 'react'
import { scrollTo } from "../../../public/js/util";
import "./backToTop.scss"
import UpArrowIcon from "../../../public/assets/icons/up-arrow-icon";

const default_y_offset = 350;
const updateInterval = 100;

const BackToTop = () => {

  let heightToTop = useHeightToTop(updateInterval);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (heightToTop >= default_y_offset)
      setShow(true);
    return () => {
      if (heightToTop < default_y_offset)
        setShow(false);
    };
  }, [heightToTop])

  return (
    <>
      {show &&
        <div className="back-to-top" onClick={() => scrollTo()}>
          <UpArrowIcon />
        </div >
      }
    </>
  )
}

export default BackToTop;