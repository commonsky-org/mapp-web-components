<svelte:options customElement="mountainview-elegant-hero-search" />

<script lang="ts">
  import ElegantSearch from "./ElegantSearch.wc.svelte";

  let { height="80px", title = "", logoUrl = "", search = $bindable(), onSearch } = $props();

</script>

<div class="hero">
  <div class="hero_logo" style={`height: ${height};`}>
    {#if logoUrl}
      <img class="hero_image" height={`${height}`} alt="logo" src={logoUrl} />
    {/if}
    <div class="hero_logo_text">{title}</div>
  </div>

  <div class="hero_search">
    <ElegantSearch bind:search={search} {onSearch} />
  </div>

</div>

<style>
  .hero {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }

  .hero_logo {
    display: flex;
    margin-top: 150px;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 560;
    color: #333;
    font-size: 20px;
  }

  .hero_image {
    width: 50px;
    height: 50px;
  }

  .hero_logo_text {
    padding-left: 12px;
  }

  .hero_search {
    width: 400px;
  }

</style>