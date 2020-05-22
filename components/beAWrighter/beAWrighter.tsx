import { useState } from "react"
import { useForm } from "react-hook-form"
import Modal from "../modal/modal"
import InputName from "../formComponent/inputName"
import InputEmail from "../formComponent/inputEmail"
import TextArea from "../formComponent/textArea"
import ButtonBox from "../buttonBox/buttonBox"
import DefaultEmail from "../emails/defaultEmail"
import sendMail from "../../util/sendMail"

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
        alert("Enviado com sucesso!")

    } catch (error)
    {
      alert(error.message)
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
