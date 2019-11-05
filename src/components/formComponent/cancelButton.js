const CancelButton = ({ cancel }) => (
  <button
    type="reset"
    className="cancel-button"
    onClick={() => {
      if (cancel) cancel();
    }}
  >
    Cancelar
  </button>
);

export default CancelButton;
