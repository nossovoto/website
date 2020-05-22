import { useState } from "react"
import { useForm } from "react-hook-form"
import Modal from "components/modal/modal"
import InputName from "components/formComponent/inputName"
import InputEmail from "components/formComponent/inputEmail"
import TextArea from "components/formComponent/textArea"
import ButtonBox from "components/formComponent/buttonBox"
import DefaultEmail from "components/emails/defaultEmail"
import sendMail from "util/sendMail"

import style from "./bugReport.module.scss"

export default function BugReport() {
  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [message, setMessage] = useState("")
  const { register, errors, handleSubmit } = useForm()

  const close = () => setShowModal(false)

  const onSubmit = async data => {
    try
    {
      const mailResponse = await sendMail(
        "Bug Report",
        DefaultEmail({
          email: data.email,
          name: data.name,
          message: "deseja inscrever como author no blog",
          title: "Bug Report"
        })
      )
      close()
      if (mailResponse.status === 200)
      {
        setMessage("Enviado com sucesso!")
        setShowAlert(true)
      }
    } catch (error)
    {
      setMessage(error.message)
      setShowAlert(true)
    }
  }

  return (
    <>
      <a onClick={() => setShowModal(true)}>Achou algum erro?</a>
      {showModal && (
        <Modal close={close}>
          <div className={style.main}>
            <h1>Achou algum erro?</h1>
            <div>
              <form
                className="default-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <InputName register={register} errors={errors} />
                <InputEmail register={register} errors={errors} />
                <TextArea register={register} errors={errors} />
                <ButtonBox cancel={close} />
              </form>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
