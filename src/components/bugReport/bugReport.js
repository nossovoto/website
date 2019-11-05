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
import "./bugReport.scss";

export default function BugReport() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const { register, errors, handleSubmit } = useForm();

  const close = () => setShowModal(false);

  const onSubmit = async data => {
    try {
      let mailResponse = await sendMail(
        "Bug Report",
        DefaultEmail(data, "Bug Report")
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
      <a onClick={() => setShowModal(true)}>Achou algum erro?</a>
      {showModal && (
        <Modal close={close}>
          <div className="bug-report">
            <h1>Achou algum erro?</h1>
            <div className="">
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
          </div>
        </Modal>
      )}
    </>
  );
}
