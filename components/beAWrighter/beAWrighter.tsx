import { useState } from "react"
import { useForm } from "react-hook-form"
import Modal from "components/modal/modal"
import InputName from "components/formComponent/inputName"
import InputEmail from "components/formComponent/inputEmail"
import TextArea from "components/formComponent/textArea"
import ButtonBox from "components/formComponent/buttonBox"
import DefaultEmail from "components/emails/defaultEmail"
import sendMail from "util/sendMail"

import style from "./beAWrighter.module.scss"

const BeAWrighter = () => {
  const [showModal, setShowModal] = useState(false)
  const { register, errors, handleSubmit } = useForm()

  const close = () => setShowModal(false)

  const title = "Seja um escritor"

  const onSubmit = async data => {
    try
    {
      const mailResponse = await sendMail(
        title,
        DefaultEmail({
          email: data.email,
          name: data.name,
          message: "deseja inscrever como author no blog",
          title
        })
      )
      close()
      if (mailResponse.status === 200)
        console.log("Enviado com sucesso!")
    } catch (error)
    {
      console.error(error)
    }
  }

  return (
    <>
      <a onClick={() => setShowModal(true)}>Quer escrever em nosso blog?</a>
      {showModal && (
        <Modal close={close}>
          <div className={style.main}>
            <h1>Quer escrever em nosso blog?</h1>
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
        </Modal>
      )}
    </>
  )
}

export default BeAWrighter
