import "./sobreSection.scss";

const SobreSection = () => (
  <section className="sobreSection">
    <div className="sobreSection-box">
      <h1>
        O nossovoto nasce para aproximar o cidadão da política brasileira.
      </h1>
      <p>
        Já imaginou ter o poder de opinar e debater sobre o que está acontecendo
        no Senado e na Câmara Federal?
      </p>
      <p>
        Através de uma timeline, centralizamos tudo que está sendo discutido no
        congresso. Assim, disponibilizamos a opção do usuário votar se concorda
        ou não com os projetos e medidas, além de possibilitar a troca de ideias
        com outros usuários através dos comentários.
      </p>
      <p>
        A informação está dispersa na rede. Nossa missão é centralizar de forma
        neutra, clara e coerente para que todo cidadão brasileiro saiba o que
        ocorre na política brasileira.
      </p>
      <p>
        O nossovoto é uma plataforma que tem como objetivo aproximar o cidadão
        da política brasileira. Através da nossa plataforma, você tem acesso a
        tudo que está ocorrendo no Congresso e na Política Nacional. Com o nosso
        blog você também poderá entender tudo o que os especialistas estão
        falando. Aqui a educação política é o nosso foco.
      </p>
      <div className="sobreSection-servicos">
        <div className="sobreSection-servicos-block">
          <div className="sobreSection-servicos-circle">COLHE</div>
          <p>Recolhemos os dados que estão espalhados na rede</p>
        </div>
        <div className="sobreSection-servicos-block">
          <div className="sobreSection-servicos-circle">ORGANIZA</div>
          <p>Organizamos de forma clara, objetiva e neutra</p>
        </div>
        <div className="sobreSection-servicos-block">
          <div className="sobreSection-servicos-circle">SIMPLIFICA</div>
          <p>
            Sem juridiquês! Disponibilizamos o resumo para você formar a sua
            própria opinião e debater com outros usuários
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SobreSection;
