import "./buttonBox.scss";
import CancelButton from "../formComponent/cancelButton";
import SubmitButton from "../formComponent/submitButton";

const ButtonBox = ({ cancel, submit }) => (
  <div className="button-box">
    <CancelButton cancel={cancel} />
    <SubmitButton submit={submit} />
  </div>
);

export default ButtonBox;
