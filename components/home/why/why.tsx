import style from "./why.module.scss"

const Why = () => (
  <section className={style.main}>
    <div className={style.container}>
      <div className={style.description}>
        <h3>
          {"Você já reparou que os políticos somem após as eleições?".toUpperCase()}
        </h3>
        <div className={style.separator}> </div>
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
      <div className={style.image}>
        <picture>
          <source srcSet="/static/images/abismo.webp" type="image/webp" />
          <source srcSet="/static/images/abismo.jpg" type="image/jpg" />
          <img src="/static/images/abismo.jpg" alt="Abismo" />
        </picture>
      </div>
    </div>
    <div className={style.button}>
      <a href="https://app.nossovoto.com.br" target="_blank">
        Acesse agora, se informe e dê sua opinião
      </a>
    </div>
  </section>
)

export default Why
