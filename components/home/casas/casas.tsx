import style from "./casas.module.scss"

const Casas = () => (
  <section className={style.main}>
    <h1>O legislativo é complexo e pouco informativo</h1>
    <p>
      Nosso objetivo é acompanhar de perto tudo que acontece no Senado Federal e
      na Câmara de Deputados Federais, como se o cidadão estivesse presente em
      todas sessões.
    </p>
    <div className={style.container}>
      <div className={style.block}>
        <div className={style.crop}>
          <picture>
            <source srcSet="/static/images/senado.webp" type="image/webp" />
            <source srcSet="/static/images/senado.jpg" type="image/jpg" />
            <img src="/static/images/senado.jpg" alt="Camara" />
          </picture>
        </div>
        <h2>SENADO</h2>
      </div>
      <div className={style.block}>
        <div className={style.crop}>
          <picture>
            <source srcSet="/static/images/camara.webp" type="image/webp" />
            <source srcSet="/static/images/camara.jpeg" type="image/jpeg" />
            <img src="/static/images/camara.jpeg" alt="Camara" />
          </picture>
        </div>
        <h2>CÂMARA</h2>
      </div>
    </div>
  </section>
)

export default Casas
