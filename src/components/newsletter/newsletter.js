import useForm from "react-hook-form";
import useAlertBox from "../../hooks/useAlertBox";
import newsletterSubscribe from "../../../public/js/subscribe";
import DefaultEmail from "../emails/defaultEmail";
import sendMail from "../../../public/js/sendMail";
import "./newsletter.scss";

const NewsLetter = ({ isHome }) => {
  const { register, errors, handleSubmit, triggerValidation } = useForm();
  const { showAlert } = useAlertBox();

  const submit = async data => {
    console.log(data);
    try {
      let mailResponse = await sendMail(
        "Nova inscrição no newsletter",
        DefaultEmail({}, "Nova Inscrição : " + data.EMAIL)
      );

      if (mailResponse.status === 200) {
        showAlert("Enviado com sucesso!");
      }

      // let response = await newsletterSubscribe(data);
      // console.log(response)
      // if (response.status === 200) {
      //   showAlert("Obrigado por se inscrever!");
      // }
    } catch (error) {
      console.log(error)
      showAlert(error.message);
    }
  };

  const validate = async () => {
    if (!await triggerValidation()) { }
  }

  return (
    <section className={`newsletter${isHome ? ' home' : ''}`}>
      <p>Fique por dentro das novidades</p>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <input
          className="newsletter-input"
          type="email"
          name="EMAIL"
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
          onClick={async () => { validate() }}
        >
          Receber Novidades
        </button>
        <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
          <input type="text" name="b_46da666e72235081403ddde3b_84d1337deb" tabIndex="-1" value="" readOnly />
        </div>
      </form>
    </section >
  )
};

const mailchimp = () => (
  <div id="mc_embed_signup">
    <form action="https://nossovoto.us19.list-manage.com/subscribe/post?" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
        <h2>Subscribe</h2>
        <div class="mc-field-group">
          <label for="mce-EMAIL">E-mail </label>
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
        </div>
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_46da666e72235081403ddde3b_84d1337deb" tabindex="-1" value="" />
        </div>
        <div class="clear">
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
        </div>
      </div>
    </form>
  </div>
)
export default NewsLetter;
