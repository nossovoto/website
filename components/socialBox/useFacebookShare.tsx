
import FacebookIcon from "../../icons/facebookIcon"
import { FACEBOOK_APP_ID } from "../../util/consts"
import { FacebookProvider, Share } from 'react-facebook'

const FaceBookShare = ({ url_to_share, shareClass }) => {
    return (
        <FacebookProvider appId={FACEBOOK_APP_ID}>
            <Share href={url_to_share}>
                {({ handleClick, loading }) => (
                    <div className={shareClass} onClick={handleClick}>
                        <FacebookIcon height={35} width={35} />
                    </div>
                )}
            </Share>
        </FacebookProvider>
    )
}

export default FaceBookShare