import { FC } from "react"

interface IInputEmail {
  register: any
  errors: any
  placeholder?: string
}

const InputEmail: FC<IInputEmail> = ({ register, errors, placeholder }) => (
  <>
    <label htmlFor="email">Email</label>
    <input
      type="email"
      name="email"
      placeholder={placeholder}
      ref={register({
        required: { value: true, message: "Campo obrigatorio" },
        pattern: {
          value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "E-mail invalido"
        }
      })}
    />
    {errors.email && (
      <div className="default-form-warn"> {errors.email.message}</div>
    )}
  </>
)

export default InputEmail
