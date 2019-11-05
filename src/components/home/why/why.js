import "./why.scss";

const Why = () => (
  <section className="why">
    <div className="why-container">
      <div className="why-description">
        <h3>
          {"Você já reparou que os políticos somem após as eleições?".toUpperCase()}
        </h3>
        <div className="why-separator"> </div>
        <p>
          {"Neste período será que estão te representando no Congresso?".toUpperCase()}
        </p>
        <p>
          Nós respondemos essa pergunta através do nossovoto, um centralizador
          de tudo que está acontecendo na política brasileira. Através dele,
          você pode monitorar o que os políticos estão aprontando no congresso,
          além de poder opinar sobre o que está sendo debatido por lá.
        </p>
      </div>
      <div className="why-image">
        <img src="/static/images/abismo.png" />
      </div>
    </div>
    <div className="why-button">Acesse agora, se informe e dê sua opinião</div>
  </section>
);

export default Why;
