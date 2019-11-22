import WhatsappIcon from "../../../public/assets/icons/whatsapp-icon";
import LinkedinIcon from "../../../public/assets/icons/linkedin-icon";
import TwitterIcon from "../../../public/assets/icons/twitter-icon";
import FacebookIcon from "../../../public/assets/icons/facebook-icon";
import MessengerIcon from "../../../public/assets/icons/messenger-icon";
import CopylinkIcon from "../../../public/assets/icons/copylink-icon";
import RedditIcon from "../../../public/assets/icons/reddit-icon";
import useClipboard from "react-use-clipboard";
import { FacebookProvider, Share } from 'react-facebook';
import { useState, useEffect } from 'react'
import "./socialBox.scss";

const generateLinks = (currentUrl) => {
  return {
    whatsapp: "whatsapp://send?text=" + currentUrl,
    linkedin: "https://www.linkedin.com/shareArticle?mini=true&url=" + currentUrl,
    messenger: "fb-messenger://share/?link=" + currentUrl,
    reddit: "http://www.reddit.com/submit?url=" + currentUrl,
    twitter: "https://twitter.com/intent/tweet?text=" + currentUrl
  }
};

const SocialBox = ({ currentUrl }) => {
  let links = generateLinks(currentUrl);
  const [url, setUrl] = useState(currentUrl);
  const [isCopied, setCopied] = useClipboard(url, {
    successDuration: 2000
  });

  useEffect(() => {
    setUrl(currentUrl);
    return () => {
      setUrl("https://nossovoto.com.br");
    };
  }, [currentUrl])

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
        <Share href={url}>
          {({ handleClick, loading }) => (
            <div className="social-box-fixed-facebook" onClick={handleClick}>
              <FacebookIcon height={35} width={35} />
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
