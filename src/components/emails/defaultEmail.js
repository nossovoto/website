const DefaultEmail = ({ name, email, message }, title) => (
  <div>
    <h1 style={{ textAlign: "center" }}>{title}</h1>
    <p>Nome: {name}</p>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);

export default DefaultEmail;
