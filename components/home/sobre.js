import "../../static/css/home/sobre.scss";

const Sobre = () => (
  <section className="sobre">
    <div className="sobre-box">
      <h1>
        O nossovoto nasce para aproximar o cidadão da política brasileira.
      </h1>
      <p>
        Imagina você podendo opinar sobre o que está acontecendo no Senado e na
        Câmara Federal
      </p>
      <p>
        Através de uma timeline, centralizamos tudo que está sendo debatido,
        disponibilizamos a opção do usuário votar se concorda ou não com o
        projeto e ainda é possível deixar a sua opinião atraves dos comentários.
      </p>
      <p>
        A informação está dispersa na rede.Nossa missão é centralizar de forma
        neutra, clara e coerente para que todo cidadão brasileiro saiba o que
        ocorre na política brasileira.
      </p>
      <div className="sobre-servicos">
        <div className="sobre-servicos-block">
          <div className="sobre-servicos-circle">COLHE</div>
          <p>Recolhemos os dados que estão espalhados na rede</p>
        </div>
        <div className="sobre-servicos-block">
          <div className="sobre-servicos-circle">ORGANIZA</div>
          <p>Organizamos de forma clara, objetiva e neutra</p>
        </div>
        <div className="sobre-servicos-block">
          <div className="sobre-servicos-circle">SIMPLIFICA</div>
          <p>
            Sem juridiquês! Disponibilizamos o resumo para você formar a sua
            própria opinião e debater com outros usuários
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Sobre;
