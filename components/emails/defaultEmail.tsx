interface IEmailProps {
  name?: string
  email: string
  message: string
  title?: string
}

const DefaultEmail = ({ name, email, message, title }: IEmailProps) => (
  <div>
    <h1 style={{ textAlign: "center" }}>{title}</h1>
    {name && <p>Nome: {name}</p>}
    {email && <p>Email: {email}</p>}
    {message && <p>Message: {message}</p>}
  </div>
)

export default DefaultEmail
