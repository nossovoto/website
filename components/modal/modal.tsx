import { FC, ReactNode } from "react"
import "./modal.scss"

interface IModalProps {
  close: () => void
  children: ReactNode
}

const Modal: FC<IModalProps> = ({ close, children }) => {
  return (
    <>
      <div className="modal-overlay" onClick={() => close()}></div>
      <div className="modal">
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
