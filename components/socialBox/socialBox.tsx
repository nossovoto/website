
import { useRouter } from "next/router"
import useClipboard from "react-use-clipboard"
import WhatsappIcon from "icons/whatsappIcon"
import LinkedinIcon from "icons/linkedinIcon"
import MessengerIcon from "icons/messengerIcon"
import RedditIcon from "icons/redditIcon"
import TwitterIcon from "icons/twitterIcon"
import CopylinkIcon from "icons/copylinkIcon"
import FaceBookShare from "./useFacebookShare"
import style from "./socialBox.module.scss"

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
    <div className={style.main}>
      <h3>Compartilhe</h3>
      <div className={style.link}>
        <a href={links.whatsapp}>
          <WhatsappIcon height={35} width={35} />
        </a>
      </div>
      <div className={style.link}>
        <a href={links.linkedin} target="_blank">
          <LinkedinIcon height={35} width={35} />
        </a>
      </div>
      <FaceBookShare url_to_share={currentUrl} shareClass={style.link} />
      <div className={style.link}>
        <a href={links.messenger}>
          <MessengerIcon height={35} width={35} />
        </a>
      </div>
      <div className={style.link}>
        <a href={links.reddit} target="_blank">
          <RedditIcon height={35} width={35} />
        </a>
      </div>
      <div className={style.link}>
        <a href={links.twitter} target="_blank">
          <TwitterIcon height={35} width={35} />
        </a>
      </div>
      <div className={style.link} onClick={setCopied}>
        <CopylinkIcon height={35} width={35} />
      </div>
      {isCopied && "Link copiado!"}
    </div>
  )
}

export default SocialBox
