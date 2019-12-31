<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <site-hero
      title="Categories"
      image="https://www.exonet3i.com/next/prestations.jpg"
    />
    <main-section theme="one-column">
      <categories-grid />
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Prestations | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
