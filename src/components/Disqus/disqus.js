import { DiscussionEmbed } from "disqus-react";
import "./disqus.scss";

const Disqus = ({ url, identifier, title }) => {

  const disqusShortName = "www-nossovoto-com-br";
  const disqusConfig = { url, identifier, title }

  return (
    <div section="disqus-threads" className="disqus-threads">
      <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
    </div>
  )
}
export default Disqus;