import { FC, ReactNode } from "react"
import style from "./modal.module.scss"

interface IModalProps {
  close: () => void
  children: ReactNode
}

const Modal: FC<IModalProps> = ({ close, children }) => {
  return (
    <>
      <div className={style.overlay} onClick={() => close()}></div>
      <div className={style.main}>
        {children}
      </div>
      <style jsx global>{`
        body {
          overflow: hidden;
        }
      `}</style>
    </>
  )
}

export default Modal
