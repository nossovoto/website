import { FC } from "react"
import CancelButton from "../formComponent/cancelButton"
import SubmitButton from "../formComponent/submitButton"
import "./buttonBox.scss"

interface IButtonBox {
  cancel: () => void
  submit?: () => void
}

const ButtonBox: FC<IButtonBox> = ({ cancel, submit }) => (
  <div className="button-box">
    <CancelButton cancel={cancel} />
    <SubmitButton submit={submit} />
  </div>
)

export default ButtonBox
