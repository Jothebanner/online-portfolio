<script lang="ts">
  import Intro from './lib/Intro.svelte';
  import ScrollReveal from 'scrollreveal';
  import Navigation from './lib/Navigation.svelte';
  import Projects from './lib/Projects.svelte';
  import Footer from './lib/Footer.svelte';
  import { onMount } from 'svelte';

  let toggle:boolean = true;

  onMount(() => {
    ScrollReveal().reveal('.fadeup-enter', { delay: '1000', threshold: 100, opacity: 0, duration: 1300, origin: 'bottom', distance: '20px'});
  })
</script>

<Navigation></Navigation>
<main class="main">
  {#if toggle}
  <div class="mainContainer container">
    <Intro></Intro>
    <Projects></Projects>
    <Footer></Footer>
  </div>
  {:else}
    <Navigation></Navigation>
  {/if}
</main>

<style lang="scss">
  .mainContainer {
    padding: var(--main-padding);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1280px;
    text-align: center;
  }
</style>