import { useForm } from "react-hook-form"
import sendMail from "util/sendMail"
import InputName from "components/formComponent/inputName"
import InputEmail from "components/formComponent/inputEmail"
import TextArea from "components/formComponent/textArea"
import ButtonBox from "components/formComponent/buttonBox"
import DefaultEmail from "components/emails/defaultEmail"

import style from "./contact.module.scss"

const Contact = () => {
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = async data => {
    try
    {
      const mailResponse = await sendMail(
        "Contato de " + data.name,
        DefaultEmail({ email: data.email, message: "Contato" })
      )
      if (mailResponse.status === 200)
      {
        alert("Enviado com sucesso!")
      }
    } catch (error)
    {
      alert(error.message)
    }
  }

  return (
    <>
      <div className={style.main}>
        <h1>Contato</h1>
        <div className={style.form}>
          <form
            className="default-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <InputName register={register} errors={errors} />
            <InputEmail register={register} errors={errors} />
            <TextArea register={register} errors={errors} />
            <ButtonBox />
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
