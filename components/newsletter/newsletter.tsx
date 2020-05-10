import { FC } from "react"
import { useForm } from "react-hook-form"
import sendMail from "../../util/sendMail"
import DefaultEmail from "../emails/defaultEmail"
import "./newsletter.scss"

interface INewsLetterProps {
  isHome: boolean
}

const NewsLetter: FC<INewsLetterProps> = ({ isHome }) => {
  const { register, errors, handleSubmit, triggerValidation } = useForm()

  const submit = async data => {
    // console.log(data);
    try
    {
      const mailResponse = await sendMail(
        "Nova inscrição no newsletter",
        DefaultEmail({ email: '', message: "Nova Inscrição:" + data.email })
      )

      if (mailResponse.status === 200)
        alert("Obrigado por se inscrever!")

    } catch (error)
    {
      // console.log(error)
      alert(error.message)
    }
  }

  return (
    <section className={`newsletter${isHome ? ' home' : ''}`}>
      <p>Fique por dentro das novidades</p>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <input
          className="newsletter-input"
          type="email"
          name="email"
          placeholder="jose@exemplo.com.br"
          ref={register({
            required: { value: true, message: "Campo obrigatorio" },
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "E-mail invalido"
            }
          })}
        />
        <button
          type="submit"
          className="newsletter-button"
          onClick={async () => await triggerValidation()}
        >
          Receber Novidades
        </button>
        <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
          <input type="text" name="b_46da666e72235081403ddde3b_84d1337deb" tabIndex={-1} value="" readOnly />
        </div>
      </form>
    </section >
  )
}

export default NewsLetter
