import { DiscussionEmbed } from "disqus-react"
import { DISQUS_SHORT_NAME } from "../../util/consts"
import style from "./disqus.module.scss"

const Disqus = ({ url, identifier, title }) => {

  const disqusConfig = { url, identifier, title }

  return (
    <div className={style.main}>
      <DiscussionEmbed shortname={DISQUS_SHORT_NAME} config={disqusConfig} />
    </div>
  )
}
export default Disqus
