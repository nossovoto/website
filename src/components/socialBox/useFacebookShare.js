
import FacebookIcon from "../../../public/assets/icons/facebook-icon";
import { useState, useEffect } from 'react'
import { FacebookProvider, Share } from 'react-facebook';

const appID = "674147143115564";
const default_url = "https://nossovoto.com.br"

const FaceBookShare = ({ url_to_share }) => {

    const [url, setUrl] = useState(default_url);

    useEffect(() => {
        setUrl(url_to_share);
        return () => {
            setUrl(default_url);
        };
    }, [url])

    return (
        <FacebookProvider appId={appID}>
            <Share href={url}>
                {({ handleClick, loading }) => (
                    <div className="social-box-fixed-facebook" onClick={handleClick}>
                        <FacebookIcon height={35} width={35} />
                    </div>
                )}
            </Share>
        </FacebookProvider>
    )
}

export default FaceBookShare;