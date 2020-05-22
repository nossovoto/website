import axios from "axios"
import ReactDOMServer from "react-dom/server"
import { ReactElement } from "react"
import { SEND_EMAIL_API_URL, SEND_TO_EMAIL } from "./consts"
import { getUnauthorizedHttpAgent } from "./util"

const sendMail = (subject: string, htmlContent: ReactElement) => {
  const mail = {
    to: SEND_TO_EMAIL,
    subject: `${subject}`,
    html: ReactDOMServer.renderToStaticMarkup(htmlContent)
  }

  return axios({
    method: 'post',
    url: SEND_EMAIL_API_URL,
    data: {
      to: mail.to,
      subject: mail.subject,
      html: mail.html
    },
    httpsAgent: getUnauthorizedHttpAgent()
  })
}

export default sendMail
