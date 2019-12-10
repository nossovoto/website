const DefaultEmail = ({ name, email, message }, title) => (
  <div>
    <h1 style={{ textAlign: "center" }}>{title}</h1>
    {name && <p>Nome: {name}</p>}
    {email && <p>Email: {email}</p>}
    {message && <p>Message: {message}</p>}
  </div>
);

export default DefaultEmail;
