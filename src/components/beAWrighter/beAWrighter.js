import { useState } from "react";
import useForm from "react-hook-form";
import Modal from "../modal/modal";
import sendMail from "../../../public/js/sendMail";
import AlertBox from "../alertBox/alertBox";
import InputName from "../formComponent/inputName";
import InputEmail from "../formComponent/inputEmail";
import TextArea from "../formComponent/textArea";
import ButtonBox from "../buttonBox/buttonBox";
import DefaultEmail from "../emails/defaultEmail";
import "./beAWrighter.scss";

export default function BeAWrighter() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const { register, errors, handleSubmit } = useForm();

  const close = () => setShowModal(false);

  const onSubmit = async data => {
    try {
      let mailResponse = await sendMail(
        data.name + " quer escrever no blog",
        DefaultEmail(data, "Quero ser escrever no Blog")
      );
      close();
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
      <a onClick={() => setShowModal(true)}>Quer escrever em nosso blog?</a>
      {showModal && (
        <Modal close={close}>
          <div className="be-wrighter">
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
  );
}
