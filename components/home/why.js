import "../../static/css/home/why.scss";

const Why = () => (
  <section className="why">
    <div className="why-container">
      <div className="why-description">
        <h1>Por quê nossovoto?</h1>
        <div className="why-separator"> </div>
        <h3>
          Você já reparou que os políticos somem após as eleições? Eles só
          aparecem para pedir o seu voto.
        </h3>
        <div className="why-separator"> </div>
        <p>
          O nossovoto é um centralizador de tudo que ocorre na política
          brasileira, e gostaríamos de saber a sua opinião sobre o que está
          sendo debatido no congrasso.
        </p>
      </div>
      <div className="why-image">
        <img src="/static/images/abismo_home_ nossovoto.jpg" />
      </div>
    </div>
    <div className="why-button">Acesse agora, se informe e dê sua opinião</div>
  </section>
);

export default Why;
