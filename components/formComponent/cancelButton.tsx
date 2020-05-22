import { FC } from "react"
import { IButton } from "./formComponentsInterface"

const CancelButton: FC<IButton> = ({ triggerAction }) => (
  <button
    type="reset"
    className="cancel-button"
    onClick={() => {
      if (triggerAction) triggerAction()
    }}
  >
    Cancelar
  </button>
)

export default CancelButton
