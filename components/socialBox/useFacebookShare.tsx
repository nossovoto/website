
import FacebookIcon from "../../icons/facebook-icon"

import { FacebookProvider, Share } from 'react-facebook'

const appID = "674147143115564"

const FaceBookShare = ({ url_to_share }) => {
    return (
        <FacebookProvider appId={appID}>
            <Share href={url_to_share}>
                {({ handleClick, loading }) => (
                    <div className="social-box-fixed-facebook" onClick={handleClick}>
                        <FacebookIcon height={35} width={35} />
                    </div>
                )}
            </Share>
        </FacebookProvider>
    )
}

export default FaceBookShare