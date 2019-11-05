import { useState } from "react";

export default function useSendMail(callback) {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const validateEmail = () => {
    if (inputs.email) {
      setErrors(errors => ({
        ...errors,
        email: "E-mail errado."
      }));
    }
  };

  validateEmail();

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    errors
  };
}
