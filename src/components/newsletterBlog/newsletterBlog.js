import React from 'react'
import DefaultEmail from "../emails/defaultEmail";
import sendMail from "../../../public/js/sendMail";

import './newsletterBlog.scss'

const EmailRgex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const NewsletterBlog = ({ withIcon = false }) => {

    const [email, setEmail] = React.useState("");

    const subscribe = async () => {
        try {
            if (!EmailRgex.test(email)) throw "Email inválido."
            let mailResponse = await sendMail(
                "Nova inscrição no novo newsletter",
                DefaultEmail({}, "Nova Inscrição : " + email)
            );

            if (mailResponse.status === 200) {
                window.alert("Obrigado por se inscrever!");
                setEmail("");
            }
        } catch (error) {
            console.log(error.message);
            window.alert(error);
        }
    };

    return (
        <div className={"newsletter-blog" + `${withIcon ? "" : " no-icon"}`}>
            {withIcon && <div className="newsletter-blog-icon" dangerouslySetInnerHTML={{ __html: icon }} />}
            <div className="newsletter-blog-box">
                <div className="newsletter-blog-titulo">
                    {"inscreva-se em nossa newsletter".toUpperCase()}
                </div>
                <div className="newsletter-blog-sub-titulo">
                    e receba por e-mail o resumo semanal sobre a politica brasileira
                </div>
                <div className={"newsletter-blog-input-box" + `${withIcon ? " with-icon" : ""}`}>
                    <input type="email" name="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Insira aqui seu melhor e-mail" />
                    <button onClick={subscribe}>Receber conteúdo</button>
                </div>
            </div>
        </div>
    )
}

export default NewsletterBlog;


const icon = `<svg width="100%" height="100%" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g id="OBJECTS">
        <g transform="matrix(0.869983,0,0,1,39.304,-4.7026)">
            <path d="M447.956,418.157C447.956,426.334 355.828,432.963 242.184,432.963C128.539,432.963 36.412,426.334 36.412,418.157C36.412,409.98 128.539,403.352 242.184,403.352C355.828,403.352 447.956,409.98 447.956,418.157" style="fill:rgb(222,225,232);fill-rule:nonzero;"/>
        </g>
        <path d="M219.643,149.895C219.531,149.895 219.417,149.878 219.305,149.841C219.296,149.838 218.399,149.548 216.779,149.064C216.201,148.892 215.872,148.283 216.044,147.705C216.217,147.127 216.826,146.797 217.403,146.971C219.053,147.463 219.943,147.751 219.98,147.764C220.554,147.95 220.868,148.566 220.682,149.14C220.532,149.602 220.103,149.895 219.643,149.895" style="fill:rgb(222,225,232);fill-rule:nonzero;"/>
        <path d="M90.498,369.065C90.286,369.065 90.071,369.003 89.882,368.875C89.384,368.534 89.257,367.854 89.598,367.356C90.095,366.63 90.564,365.893 90.992,365.167C91.298,364.647 91.968,364.473 92.488,364.78C93.007,365.086 93.181,365.755 92.874,366.276C92.421,367.044 91.925,367.824 91.4,368.59C91.189,368.899 90.847,369.065 90.498,369.065" style="fill:rgb(222,225,232);fill-rule:nonzero;"/>
        <path d="M156.102,96.199L156.102,402.169C156.102,411.761 163.874,419.533 173.466,419.533L325.833,419.533C330.652,419.533 335.009,417.572 338.156,414.405C341.271,411.263 343.197,406.941 343.197,402.169L343.197,96.199C343.197,86.608 335.425,78.835 325.833,78.835L173.466,78.835C170.631,78.835 167.955,79.513 165.59,80.72C159.956,83.591 156.102,89.443 156.102,96.199" style="fill:rgb(42,53,65);fill-rule:nonzero;"/>
        <path d="M343.197,154.086L344.229,154.086C346.455,154.086 348.259,152.281 348.259,150.055L348.259,130.484C348.259,128.258 346.455,126.453 344.229,126.453L343.197,126.453L343.197,154.086Z" style="fill:rgb(2,16,25);fill-rule:nonzero;"/>
        <path d="M156.102,154.086L155.07,154.086C152.844,154.086 151.04,152.281 151.04,150.055L151.04,130.484C151.04,128.258 152.844,126.453 155.07,126.453L156.102,126.453L156.102,154.086Z" style="fill:rgb(2,16,25);fill-rule:nonzero;"/>
        <path d="M343.197,190.338L344.229,190.338C346.455,190.338 348.259,188.533 348.259,186.307L348.259,166.736C348.259,164.51 346.455,162.705 344.229,162.705L343.197,162.705L343.197,190.338Z" style="fill:rgb(2,16,25);fill-rule:nonzero;"/>
        <path d="M334.533,95.145L334.533,403.215C334.533,404.279 334.317,405.287 333.927,406.211C332.758,408.951 330.047,410.865 326.883,410.865L172.416,410.865C168.193,410.865 164.765,407.45 164.765,403.215L164.765,95.145C164.765,94.719 164.801,94.299 164.871,93.89C165.302,91.287 167.054,89.125 169.411,88.107C169.902,87.896 170.416,87.738 170.95,87.635C171.424,87.543 171.914,87.495 172.416,87.495L326.883,87.495C331.108,87.495 334.533,90.925 334.533,95.145" style="fill:white;fill-rule:nonzero;"/>
        <path d="M334.533,95.145L334.533,115.665L164.765,115.665L164.765,95.145C164.765,94.719 164.801,94.299 164.871,93.89C165.302,91.287 167.054,89.125 169.411,88.107C169.902,87.896 170.416,87.738 170.95,87.635C171.424,87.543 171.914,87.495 172.416,87.495L326.883,87.495C331.108,87.495 334.533,90.925 334.533,95.145" style="fill:rgb(222,225,232);fill-rule:nonzero;"/>
        <path d="M297.547,87.495L291.249,93.792C289.851,95.191 289.067,97.088 289.067,99.066C289.067,101.124 288.232,102.989 286.881,104.336C285.531,105.686 283.667,106.522 281.608,106.522L221.601,106.522C219.54,106.522 217.675,105.686 216.328,104.336C214.978,102.989 214.142,101.124 214.142,99.066C214.142,97.088 213.358,95.191 211.96,93.792L205.662,87.495L297.547,87.495Z" style="fill:rgb(42,53,65);fill-rule:nonzero;"/>
        <path d="M279.36,96.867C279.36,98.578 277.973,99.966 276.261,99.966C274.549,99.966 273.163,98.578 273.163,96.867C273.163,95.156 274.549,93.768 276.261,93.768C277.973,93.768 279.36,95.156 279.36,96.867" style="fill:rgb(68,82,96);fill-rule:nonzero;"/>
        <path d="M266.302,99.966L223.976,99.966C222.493,99.966 221.291,98.764 221.291,97.281L221.291,96.453C221.291,94.97 222.493,93.768 223.976,93.768L266.302,93.768C267.784,93.768 268.987,94.97 268.987,96.453L268.987,97.281C268.987,98.764 267.784,99.966 266.302,99.966" style="fill:rgb(68,82,96);fill-rule:nonzero;"/>
        <g>
            <text x="178.285px" y="163.719px" style="font-family:'Montserrat-Black';font-size:43.856px;fill:rgb(42,53,65);">NE<tspan x="242.621px " y="163.719px ">W</tspan></text>
            <text x="294.854px" y="163.719px" style="font-family:'Montserrat-Black';font-size:43.856px;fill:rgb(42,53,65);">S</text>
        </g>
        <rect x="178.285" y="173.653" width="145.348" height="5.988" style="fill:rgb(23,82,140);fill-rule:nonzero;"/>
        <path d="M320.257,194.421L181.338,194.421C179.592,194.421 178.177,195.836 178.177,197.582L178.177,197.585C178.177,199.33 179.592,200.745 181.338,200.745L320.257,200.745C322.003,200.745 323.418,199.33 323.418,197.585L323.418,197.582C323.418,195.836 322.003,194.421 320.257,194.421" style="fill:rgb(182,190,202);fill-rule:nonzero;"/>
        <path d="M320.257,208.121L181.338,208.121C179.592,208.121 178.177,209.536 178.177,211.282C178.177,213.027 179.592,214.442 181.338,214.442L320.257,214.442C322.003,214.442 323.418,213.027 323.418,211.282C323.418,209.536 322.003,208.121 320.257,208.121" style="fill:rgb(182,190,202);fill-rule:nonzero;"/>
        <path d="M320.257,221.817L181.338,221.817C179.592,221.817 178.177,223.232 178.177,224.978L178.177,224.98C178.177,226.726 179.592,228.141 181.338,228.141L320.257,228.141C322.003,228.141 323.418,226.726 323.418,224.98L323.418,224.978C323.418,223.232 322.003,221.817 320.257,221.817" style="fill:rgb(182,190,202);fill-rule:nonzero;"/>
        <path d="M241.458,240.394L181.56,240.394C179.814,240.394 178.312,241.76 178.285,243.505C178.257,245.275 179.684,246.718 181.446,246.718L241.458,246.718C243.205,246.718 244.62,245.302 244.62,243.556C244.62,241.81 243.205,240.394 241.458,240.394" style="fill:rgb(182,190,202);fill-rule:nonzero;"/>
        <path d="M241.458,254.092L181.56,254.092C179.814,254.092 178.312,255.458 178.285,257.203C178.257,258.973 179.684,260.415 181.446,260.415L241.458,260.415C243.205,260.415 244.62,259 244.62,257.254C244.62,255.508 243.205,254.092 241.458,254.092" style="fill:rgb(182,190,202);fill-rule:nonzero;"/>
        <path d="M241.458,267.79L181.56,267.79C179.814,267.79 178.312,269.155 178.285,270.901C178.257,272.671 179.684,274.113 181.446,274.113L241.458,274.113C243.205,274.113 244.62,272.698 244.62,270.952C244.62,269.205 243.205,267.79 241.458,267.79" style="fill:rgb(182,190,202);fill-rule:nonzero;"/>
        <path d="M244.619,294.219L244.619,383.625C244.619,385.79 242.864,387.545 240.699,387.545L182.22,387.545C180.055,387.545 178.297,385.79 178.297,383.625L178.297,294.219C178.297,292.054 180.055,290.296 182.22,290.296L240.699,290.296C242.864,290.296 244.619,292.054 244.619,294.219" style="fill:rgb(182,190,202);fill-rule:nonzero;"/>
        <path d="M320.471,240.394L260.573,240.394C258.827,240.394 257.325,241.76 257.298,243.505C257.27,245.275 258.697,246.718 260.459,246.718L320.471,246.718C322.217,246.718 323.633,245.302 323.633,243.556C323.633,241.81 322.217,240.394 320.471,240.394" style="fill:rgb(182,190,202);fill-rule:nonzero;"/>
        <path d="M320.471,254.092L260.573,254.092C258.827,254.092 257.325,255.458 257.298,257.203C257.27,258.973 258.697,260.415 260.459,260.415L320.471,260.415C322.217,260.415 323.633,259 323.633,257.254C323.633,255.508 322.217,254.092 320.471,254.092" style="fill:rgb(182,190,202);fill-rule:nonzero;"/>
        <path d="M320.471,267.79L260.574,267.79C258.827,267.79 257.325,269.155 257.298,270.901C257.27,272.671 258.697,274.113 260.459,274.113L320.471,274.113C322.217,274.113 323.633,272.698 323.633,270.952C323.633,269.205 322.217,267.79 320.471,267.79" style="fill:rgb(182,190,202);fill-rule:nonzero;"/>
        <path d="M319.711,290.297L261.232,290.297C259.066,290.297 257.311,292.054 257.311,294.22L257.311,383.624C257.311,385.79 259.066,387.546 261.232,387.546L319.711,387.546C321.877,387.546 323.633,385.79 323.633,383.624L323.633,294.22C323.633,292.054 321.877,290.297 319.711,290.297" style="fill:rgb(182,190,202);fill-rule:nonzero;"/>
        <path d="M60.742,113.217L59.789,113.217C59.619,113.217 59.462,113.123 59.377,112.969C59.291,112.817 59.291,112.628 59.377,112.475L59.853,111.618C59.985,111.383 60.276,111.301 60.504,111.438C60.732,111.574 60.81,111.877 60.679,112.113L60.615,112.228L60.742,112.228C61.005,112.228 61.219,112.449 61.219,112.722C61.219,112.995 61.005,113.217 60.742,113.217" style="fill:rgb(255,80,42);fill-rule:nonzero;"/>
    </g>
</svg>
`