<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="Mon parcours."
      subtitle="Développeur web et web mobile."
      image="/uploads/about-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Mes compétences</h3>
          <p>
            <strong>
              Je suis développeur web et web mobile, webmaster et webdesigner.
            </strong>
          </p>
          <p>
            Autodidacte dans le domaine du numérique depuis 2014,au cours de ces
            années je me suis forme dans le vaste domaine qu'est le numerique,
            en abordant toutes les technologies innovantes. En 2019, j'ai obtenu
            le Titre de développeur web et web mobile, un challenge, qui a été
            pour moi d'une grande importance.
          </p>

          <h3>En tant que webmaster</h3>
          <p>
            Je developpe votre identite numerique, votre projet personnel ou
            professionnel est sur d'aquerir un grand potentiel avec les outils
            dont je dispose, ainsi que mes connaissances dans les technologies
            suivantes :
          </p>
          <ul>
            <li>
              html/css, javascript, php.
            </li>
            <li>
              sql, json.
            </li>
          </ul>
          <p>
            Une bonne preparation de votre projet est incontournable, et passe
            par une realisation d'une maquette avec un Wireframe et un Mockup,
            l'etablissement d'une charte graphique et un cahier des charges.
          </p>
          <h3>En tant que développeur</h3>
          <p>
            J'utilise les frameworks pour le developpement de mes applications,
            laravel pour une utilisation specifique , et plus dans le code :
            React native (Expo/Ionic), Angular, et Next.js, avec la conception
            d'application mobiles sous Android et IOS.
          </p>
        </div>
        <quote-card />
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                React Native
              </p>
              <p class="subtitle">
                Une solution concrete.
              </p>
              <figure class="image is-1by1">
                <opti-image
                  width="250"
                  height="250"
                  :src="require('~/assets/uploads/react.png').src"
                  :srcset="require('~/assets/uploads/react.png').srcSet"
                />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Angular
              </p>
              <p class="subtitle">
                La simplicite.
              </p>
              <figure class="image is-1by1">
                <opti-image
                  width="250"
                  height="250"
                  :src="require('~/assets/uploads/angular.png').src"
                  :srcset="require('~/assets/uploads/angular.png').srcSet"
                />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Next.js
              </p>
              <p class="subtitle">
                Le futur.
              </p>
              <figure class="image is-1by1">
                <opti-image
                  width="250"
                  height="250"
                  :src="require('~/assets/uploads/next-js.png').src"
                  :srcset="require('~/assets/uploads/next-js.png').srcSet"
                />
              </figure>
            </article>
          </div>
        </div>
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import QuoteCard from '~/components/cards/QuoteCard'
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  },
  components: { QuoteCard }
}
</script>
