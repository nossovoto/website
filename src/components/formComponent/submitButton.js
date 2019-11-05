const SubmitButton = ({ submit }) => (
  <button
    type="submit"
    className="send-button"
    onClick={() => {
      if (submit) submit();
    }}
  >
    Enviar
  </button>
);

export default SubmitButton;
