import "./casas.scss";

const Casas = () => (
  <section className="casas">
    <h1>O legislativo é complexo e pouco informativo</h1>
    <p>
      Nosso objetivo é acompanhar de perto tudo que acontece no Senado Federal e
      na Câmara de Deputados Federais, como se o cidadão estivesse presente em
      todas sessões.
    </p>
    <div className="casas-image-container">
      <div className="casas-image-block">
        <div className="casas-image-crop">
          <picture>
            <source srcSet="/static/images/senado.webp" type="image/webp" />
            <source srcSet="/static/images/senado.jpg" type="image/jpg" />
            <img src="/static/images/senado.jpg" alt="Camara" />
          </picture>
        </div>
        <h2>SENADO</h2>
      </div>
      <div className="casas-image-block">
        <div className="casas-image-crop">
          <picture>
            <source srcSet="/static/images/camara.webp" type="image/webp" />
            <source srcSet="/static/images/camara.jpeg" type="image/jpeg" />
            <img src="/static/images/camara.jpeg" alt="Camara" />
          </picture>
        </div>
        <h2>CÂMARA</h2>
      </div>
    </div>
    <div className="casas-separator"> </div>
  </section>
);

export default Casas;
