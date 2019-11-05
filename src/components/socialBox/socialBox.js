import "./socialBox.scss";
import WhatsappIcon from "../../../public/assets/icons/whatsapp-icon";
import LinkedinIcon from "../../../public/assets/icons/linkedin-icon";
import FacebookIcon from "../../../public/assets/icons/facebook-icon";
import MessengerIcon from "../../../public/assets/icons/messenger-icon";
import CopylinkIcon from "../../../public/assets/icons/copylink-icon";

const dummyLinks = {
  whatsapp: "whatsapp://send?text=",
  linkedin: "https://www.linkedin.com/shareArticle?mini=true&url=",
  facebook: "",
  messenger: "fb-messenger://share/?link=",
  copylink: ""
};

const SocialBox = ({ currentUrl }) => {
  let links = {};
  links.whatsapp = dummyLinks.whatsapp + currentUrl;
  links.linkedin = dummyLinks.linkedin + currentUrl;
  links.facebook = dummyLinks.facebook + currentUrl;
  links.messenger = dummyLinks.messenger + currentUrl;
  links.copylink = dummyLinks.copylink + currentUrl;

  return (
    <div className="social-box-fixed">
      <div className="social-box-fixed-whatsapp">
        <a href={links.whatsapp}>
          <WhatsappIcon height={35} width={35} />
        </a>
      </div>
      <div className="social-box-fixed-linkedin">
        <a href={links.linkedin} target="_blank">
          <LinkedinIcon height={35} width={35} />
        </a>
      </div>
      <div className="social-box-fixed-facebook">
        <a href={links.facebook} target="_blank">
          <FacebookIcon height={35} width={35} />
        </a>
      </div>
      <div className="social-box-fixed-message">
        <a href={links.messenger}>
          <MessengerIcon height={35} width={35} />
        </a>
      </div>
      <div className="social-box-fixed-copylink">
        <a href={links.copylink}>
          <CopylinkIcon height={35} width={35} />
        </a>
      </div>
    </div>
  );
};

export default SocialBox;
