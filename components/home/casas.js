import "../../static/css/home/casas.scss";

const Casas = () => (
  <section className="casas">
    <h2>O legistalivo é complexo e pouco informativo</h2>
    <p>
      Nosso objetivo é acompanhar de perto tudo que acontece no Senado Federal e
      na Câmara de Deputados Federais, como se o cidadão estivesse presente em
      todas sessões.
    </p>
    <div className="casas-image-container">
      <div className="casas-image-block">
        <div className="casas-image-crop">
          <img src="/static/images/senado1_home_nossovoto.jpg" />
        </div>
        <h2>SENADO</h2>
      </div>
      <div className="casas-image-block">
        <div className="casas-image-crop">
          <img src="/static/images/camara3_home_nossovoto.jpeg" />
        </div>
        <h2>CÂMARA</h2>
      </div>
    </div>
    <div className="casas-separator"> </div>
  </section>
);

export default Casas;
