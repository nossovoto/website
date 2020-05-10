import { useState } from "react"
import { useForm } from "react-hook-form"
import sendMail from "../../../public/js/sendMail"
import AlertBox from "../alertBox/alertBox"
import InputName from "../formComponent/inputName"
import InputEmail from "../formComponent/inputEmail"
import TextArea from "../formComponent/textArea"
import ButtonBox from "../buttonBox/buttonBox"
import DefaultEmail from "../emails/defaultEmail"

import "./contact.scss"

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
      <div className="contact-page">
        <h1>Contato</h1>
        <div className="contact-form">
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
