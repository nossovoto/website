import "./socialBox.scss";
import WhatsappIcon from "../../../public/assets/icons/whatsapp-icon";
import LinkedinIcon from "../../../public/assets/icons/linkedin-icon";
import TwitterIcon from "../../../public/assets/icons/twitter-icon";
import FacebookIcon from "../../../public/assets/icons/facebook-icon";
import MessengerIcon from "../../../public/assets/icons/messenger-icon";
import CopylinkIcon from "../../../public/assets/icons/copylink-icon";
import RedditIcon from "../../../public/assets/icons/reddit-icon";

const dummyLinks = {
  whatsapp: "whatsapp://send?text=",
  linkedin: "https://www.linkedin.com/shareArticle?mini=true&url=",
  facebook: "",
  messenger: "fb-messenger://share/?link=",
  reddit: "http://www.reddit.com/submit?url=",
  twitter: "https://twitter.com/intent/tweet?text=",
  copylink: ""
};

const SocialBox = ({ currentUrl }) => {
  let links = {};
  links.whatsapp = dummyLinks.whatsapp + currentUrl;
  links.linkedin = dummyLinks.linkedin + currentUrl;
  links.facebook = dummyLinks.facebook + currentUrl;
  links.messenger = dummyLinks.messenger + currentUrl;
  links.reddit = dummyLinks.reddit + currentUrl;
  links.twitter = dummyLinks.twitter + currentUrl;
  links.copylink = dummyLinks.copylink + currentUrl;

  return (
    <div className="social-box-fixed">
      <h3>Compartilhe</h3>
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
      <div className="social-box-fixed-reddit" >
        <a href={links.reddit} target="_blank">
          <RedditIcon height={35} width={35} />
        </a>
      </div>
      <div className="social-box-fixed-twitter">
        <a href={links.twitter} target="_blank">
          <TwitterIcon height={35} width={35} />
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
