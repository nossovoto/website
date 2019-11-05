import axios from "axios";
import ReactDOMServer from "react-dom/server";

export default function sendMail(subject, htmlContent) {
  let mail = {
    to: "gustavomasutti@nossovoto.com.br",
    subject: subject,
    html: ReactDOMServer.renderToStaticMarkup(htmlContent)
  };

  const agent = new (require("https")).Agent({
    rejectUnauthorized: false
  });

  const URL = "https://nossovoto.com.br:3002/sendEmailNotification";

  return axios({
    method: "post",
    url: URL,
    data: {
      to: mail.to,
      subject: mail.subject,
      html: mail.html
    },
    httpsAgent: agent
  });
}
