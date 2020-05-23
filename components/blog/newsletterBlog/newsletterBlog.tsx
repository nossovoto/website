import React, { FC } from 'react'
import DefaultEmail from 'components/emails/defaultEmail'
import NewsletterCellphoneIcon from 'icons/newsletterCellpnhoneIcon'
import sendMail from 'util/sendMail'
import { EMAIL_REGEX } from 'util/consts'
import style from './newsletterBlog.module.scss'

interface INewsletterBlog {
    withIcon?: boolean
}

const NewsletterBlog: FC<INewsletterBlog> = ({ withIcon = false }) => {

    const [email, setEmail] = React.useState("")

    const subscribe = async () => {
        try
        {
            if (!EMAIL_REGEX.test(email))
                throw new Error("Email inválido.")
            const message = "Nova Inscrição : " + email
            const mailResponse = await sendMail(
                "Nova inscrição no novo newsletter",
                DefaultEmail({
                    email,
                    message: "Nova inscrição no novo newsletter"
                })
            )
            if (mailResponse.status === 200)
            {
                window.alert("Obrigado por se inscrever!")
                setEmail("")
            }
        } catch (error)
        {
            window.alert(error)
        }
    }
    return (
        <div id="newsletter-blog" className={style.main + `${withIcon ? "" : ` ${style.no_icon}`}`}>
            {withIcon && <NewsletterCellphoneIcon iconClass={style.icon} />}
            <div className={style.box}>
                <div className={style.titulo}>
                    {"inscreva-se em nossa newsletter".toUpperCase()}
                </div>
                <div className={style.sub_titulo}>
                    e receba por e-mail o resumo semanal sobre a politica brasileira
                </div>
                <div className={style.input_box}>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="Insira aqui seu melhor e-mail" />
                    <button onClick={subscribe}>Receber conteúdo</button>
                </div>
            </div>
        </div>
    )
}

export default NewsletterBlog
