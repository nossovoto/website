export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const SEND_EMAIL_API_URL = "https://nossovoto.com.br:3002/sendEmailNotification"

export const NOSSOVOTO_URL = "https://nossovoto.com.br"

export const POST_API_URL = "https://nossovoto.com.br:3002/blog/"

export const SEND_TO_EMAIL = "masutti@gmail.com"

export const GA_TRACKING_ID = 'GTM-MG3N33S'

export const FACEBOOK_APP_ID = "674147143115564"

export const DISQUS_SHORT_NAME = "www-nossovoto-com-br"

export const isDevelopmentEnv = process.env.NODE_ENV === "development"

export const isProductionEnv = process.env.NODE_ENV === "production"

export const isTestEnv = process.env.NODE_ENV === "test"