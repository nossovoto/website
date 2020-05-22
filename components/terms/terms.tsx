import TermsSection1 from "./sections/section1"
import TermsSection2 from "./sections/section2"
import TermsSection3 from "./sections/section3"
import TermsSection4 from "./sections/section4"
import TermsSection5 from "./sections/section5"
import TermsSection6 from "./sections/section6"
import TermsSection7 from "./sections/section7"
import TermsSection8 from "./sections/section8"
import TermsSection9 from "./sections/section9"
import TermsSection10 from "./sections/section10"
import TermsSection11 from "./sections/section11"
import TermsSection12 from "./sections/section12"

import style from "./term.module.scss"


const Terms = () => (
  <div className={style.main}>
    <h1>TERMOS E CONDIÇÕES GERAIS DE USO DO SITE nossovoto</h1>
    <p>
      Estes termos e condições gerais de uso aplicam-se aos serviços prestados
      pelo site <a href="www.nossovoto.com.br">www.nossovoto.com.br</a>.
    </p>
    <ol type="I">
      <TermsSection1 />
      <TermsSection2 />
      <TermsSection3 />
      <TermsSection4 />
      <br />
      <TermsSection5 />
      <TermsSection6 />
      <br />
      <TermsSection7 />
      <TermsSection8 />
      <TermsSection9 />
      <TermsSection10 />
      <TermsSection11 />
      <br />
      <TermsSection12 />
    </ol>

    <p>Seja bem-vindo(a)!</p>
    <p>O time do nossovoto lhe deseja uma excelente experiência!</p>
  </div>
)

export default Terms
