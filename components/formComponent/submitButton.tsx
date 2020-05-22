import { FC } from "react"
import { IButton } from "./formComponentsInterface"

const SubmitButton: FC<IButton> = ({ triggerAction }) => (
  <button
    type="submit"
    className="send-button"
    onClick={() => {
      if (triggerAction) triggerAction()
    }}
  >
    Enviar
  </button>
)

export default SubmitButton
