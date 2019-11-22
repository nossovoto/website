import WhatsappIcon from "../../../public/assets/icons/whatsapp-icon";
import LinkedinIcon from "../../../public/assets/icons/linkedin-icon";
import TwitterIcon from "../../../public/assets/icons/twitter-icon";
import FacebookIcon from "../../../public/assets/icons/facebook-icon";
import MessengerIcon from "../../../public/assets/icons/messenger-icon";
import CopylinkIcon from "../../../public/assets/icons/copylink-icon";
import RedditIcon from "../../../public/assets/icons/reddit-icon";
import useClipboard from "react-use-clipboard";
import { FacebookProvider, Share } from 'react-facebook';
import "./socialBox.scss";

const dummyLinks = {
  whatsapp: "whatsapp://send?text=",
  linkedin: "https://www.linkedin.com/shareArticle?mini=true&url=",
  messenger: "fb-messenger://share/?link=",
  reddit: "http://www.reddit.com/submit?url=",
  twitter: "https://twitter.com/intent/tweet?text=",
};

const SocialBox = ({ currentUrl }) => {
  let links = {};
  links.whatsapp = dummyLinks.whatsapp + currentUrl;
  links.linkedin = dummyLinks.linkedin + currentUrl;
  links.messenger = dummyLinks.messenger + currentUrl;
  links.reddit = dummyLinks.reddit + currentUrl;
  links.twitter = dummyLinks.twitter + currentUrl;

  const [isCopied, setCopied] = useClipboard(currentUrl, {
    successDuration: 2000
  });

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
      <FacebookProvider appId="674147143115564">
        <Share href={currentUrl}>
          {({ handleClick, loading }) => (
            <div className="social-box-fixed-facebook" onClick={handleClick}>
              <a href={links.facebook} target="_blank">
                <FacebookIcon height={35} width={35} />
              </a>
            </div>
          )}
        </Share>
      </FacebookProvider>
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
      <div className={"social-box-fixed-copylink"} onClick={setCopied}>
        <CopylinkIcon height={35} width={35} />
      </div>
      {isCopied && "Link copiado!"}
    </div>
  );
};

export default SocialBox;
