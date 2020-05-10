
import WhatsappIcon from "../../icons/whatsapp-icon"
import LinkedinIcon from "../../icons/linkedin-icon"
import MessengerIcon from "../../icons/messenger-icon"
import RedditIcon from "../../icons/reddit-icon"
import TwitterIcon from "../../icons/twitter-icon"
import CopylinkIcon from "../../icons/copylink-icon"
import FaceBookShare from "./useFacebookShare"
import useClipboard from "react-use-clipboard"
import { useRouter } from "next/router"
import "./socialBox.scss"

const generateLinks = (currentUrl) => {
  return {
    whatsapp: "whatsapp://send?text=" + currentUrl,
    linkedin: "https://www.linkedin.com/shareArticle?mini=true&url=" + currentUrl,
    messenger: "fb-messenger://share/?link=" + currentUrl,
    reddit: "http://www.reddit.com/submit?url=" + currentUrl,
    twitter: "https://twitter.com/intent/tweet?text=" + currentUrl
  }
}

const SocialBox = () => {

  const { asPath } = useRouter()
  const currentUrl = URL + asPath
  const links = generateLinks(currentUrl)
  const [isCopied, setCopied] = useClipboard(currentUrl, { successDuration: 2000 })

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
      <FaceBookShare url_to_share={currentUrl} />
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
  )
}

export default SocialBox
