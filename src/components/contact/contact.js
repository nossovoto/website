import { useState } from "react";
import { useForm } from "react-hook-form";
import sendMail from "../../../public/js/sendMail";
import AlertBox from "../alertBox/alertBox";
import InputName from "../formComponent/inputName";
import InputEmail from "../formComponent/inputEmail";
import TextArea from "../formComponent/textArea";
import ButtonBox from "../buttonBox/buttonBox";
import DefaultEmail from "../emails/defaultEmail";

import "./contact.scss";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async data => {
    try {
      let mailResponse = await sendMail(
        "Contato de " + data.name,
        DefaultEmail(data, "Contato")
      );
      if (mailResponse.status === 200) {
        setMessage("Enviado com sucesso!");
        setShowAlert(true);
      }
    } catch (error) {
      setMessage(error.message);
      setShowAlert(true);
    }
  };

  return (
    <>
      {showAlert && (
        <AlertBox
          close={() => setShowAlert(false)}
          message={message}
          show={showAlert}
        />
      )}
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
  );
};

export default Contact;
