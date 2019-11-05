import Link from "next/link";
import "./footer.scss";
import InstagramIcon from "../../../public/assets/icons/instagram-icon";
import LinkedinIcon from "../../../public/assets/icons/linkedin-icon";
import TwitterIcon from "../../../public/assets/icons/twitter-icon";
import FacebookIcon from "../../../public/assets/icons/facebook-icon";
import BugReport from "../../components/bugReport/bugReport";
import BeAWrighter from "../../components/beAWrighter/beAWrighter";

const Footer = () => (
  <footer className="footer">
    <div className="widget">
      <div className="footer-nossovoto">
        <Link href="/" passHref>
          <img
            className="footer-logo"
            src="/static/images/logo_azul.png"
            alt="logo"
          />
        </Link>
        <p className="footer-text">
          O nossovoto é uma plataforma que tem como objetivo aproximar o cidadão
          da política brasileira. Através da nosso plataforma você tem acesso a
          tudo que está ocorrendo no Congresso e na Política Nacional. Com o
          nosso blog você também poderá entender tudo o que os especialistas
          estão falando, aqui a educação é o nosso foco.
        </p>
      </div>
      <div className="footer-empresa">
        <h4>Empresa</h4>
        <ul>
          <li>
            <Link href="/sobre">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/politica-de-privacidade">
              <a>Política de Privacidade</a>
            </Link>
          </li>
          <li>
            <Link href="/termos-e-servicos">
              <a>Termos de uso</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-comunidade">
        <h4>Comunidade</h4>
        <ul>
          <li>
            <BeAWrighter />
          </li>
          <li>
            <BugReport />
          </li>
        </ul>
      </div>
      <div className="footer-ajuda">
        <h4>Ajuda</h4>
        <ul>
          <li>
            <Link href="/faq">
              <a>FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <a>Entre em contato</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-social-box">
      <a href="https://www.instagram.com/nossovoto/" target="_blank">
        <InstagramIcon height="30" width="30" />
      </a>
      <a href="https://www.linkedin.com/company/nossovoto/" target="_blank">
        <LinkedinIcon height="30" width="30" />
      </a>
      <a href="https://twitter.com/nossovotobr" target="_blank">
        <TwitterIcon height="30" width="30" />
      </a>
      <a href="https://www.facebook.com/nossovotobr" target="_blank">
        <FacebookIcon height="30" width="30" />
      </a>
    </div>
    <small>Todos os direitos reservados @nossovoto, 2019 © </small>
  </footer>
);

export default Footer;
