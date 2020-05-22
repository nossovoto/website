import { FC } from "react"
import CancelButton from "./cancelButton"
import SubmitButton from "./submitButton"
import style from "./slyte.module.scss"

interface IButtonBox {
  cancel?: () => void
  submit?: () => void
}

const ButtonBox: FC<IButtonBox> = ({ cancel, submit }) => (
  <div className={style.button_box}>
    <CancelButton triggerAction={cancel} />
    <SubmitButton triggerAction={submit} />
  </div>
)

export default ButtonBox
