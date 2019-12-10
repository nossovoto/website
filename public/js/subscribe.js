import axios from "axios";

const MAILCHIMP_API_KEY = "8a7a4ffcc4ee900274001ceae8987fa6-us19";
const LIST_ID = "84d1337deb";
const REGION_NAME = 'us19';
const URL = `https://${REGION_NAME}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/`;

const options = {
  headers: {
    Authorization: `apikey ${MAILCHIMP_API_KEY}`,
    'Content-Type': 'application/json;charset=utf-8'
  }
}

export default function newsletterSubscribe(email) {
  const user = {
    status: "subscribed", // Tell Mailchimp to subscribe this email
    email_address: email// Note that Mailchimp takes an email_address field, not just email
  };
  return axios.post(URL, user, options);
}
