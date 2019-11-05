import "./modal.scss";

const Modal = props => {
  return (
    <>
      <div className="modal-overlay" onClick={() => props.close()}></div>
      <div className="modal">{props.children}</div>
      <style jsx global>{`
        body {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};
export default Modal;
