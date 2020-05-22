import style from "./faq.module.scss"

const FAQPage = () => (
  <div className={style.main}>
    <h1>FAQ</h1>
    <h3>O que é o nossovoto?</h3>
    <p>
      O nossovoto é uma startup que centraliza tudo que está sendo debatido na Câmara dos Deputados Federais e do Senado Federal.
      <br />
      A cada quatro anos elegemos diversas pessoas e não temos o costume de acompanhar o seu trabalho. Muitas vezes, isso acontece por não sabermos por onde fiscalizar. O nossovoto chega pra eliminar o abismo dessa situação.
    </p>
    <h3>Qual é a missão do nossovoto?</h3>
    <p>Aproximar o cidadão brasileiro da política.</p>
    <h3>Quais ferramentas tecnológicas o nossovoto utiliza?</h3>
    <p>
      O nossovoto utiliza api’s do Senado Federal e da Câmara de Deputados Federais para coletar as informações. Após uma curadoria, disponibilizamos para o cidadão todas as propostas que são protocoladas nessas casas legislativas. Assim, o usuário pode votar se concorda com o que está sendo proposto ou não.
    </p>
    <h3>Quais dados o nossovoto utiliza?</h3>
    <p>
      O nossovoto utiliza apenas os dados dos resultados das pesquisas. Não é de nosso interesse guardarmos os dados pessoas de cada usuário, mantendo sempre a sua privacidade.
    </p>
    <h3>Como faço para participar do nossovoto?</h3>
    <p>Basta se cadastrar no site clicando <a href="https://app.nossovoto.com.br">aqui</a>.</p>
    <h3>O que posso fazer se não compreendo os termos das propostas?</h3>
    <p>
      O nosso blog pode solucionar esse problema. Lá fornecemos diversos conteúdos educativos que podem dar a resposta que você precisa.
      <br />
      Caso não encontre o que você quer saber, fique à vontade para entrar em contato através do nosso e-mail.
    </p>
  </div>
)

export default FAQPage
