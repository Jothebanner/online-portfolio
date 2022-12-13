<script lang="ts">
  "use strict";
  import Intro from "./lib/Intro.svelte";
  import ScrollReveal from "scrollreveal";
  import Navigation from "./lib/Navigation.svelte";
  import Projects from "./lib/Projects.svelte";
  import Footer from "./lib/Footer.svelte";
  import About from "./lib/About.svelte";
  import { onMount } from "svelte";

  let toggle: boolean = true;

  onMount(() => {
    ScrollReveal().reveal(".fadeup-enter", {
      delay: "1000",
      threshold: 100,
      opacity: 0,
      duration: 1300,
      origin: "bottom",
      distance: "20px",
    });
  });
</script>

{#if toggle}
  <Navigation />
  <main class="main">
    <div class="mainContainer container">
      <Intro />
      <Projects />
      <About />
      <Footer />
    </div>
  </main>
{:else}
  <Navigation />
{/if}

<style lang="scss">
  .main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;
    min-width: 320px;
  }
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
  @media screen and (max-width: 320px) {
    // bootstrap grid extra small
  }
  @media screen and (min-width: 320px) {
    // this is the pro-gamer-strat because it does a very good job keeping the site inside of small screens
    .main {
      max-width: 100vw;
    }
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (max-width: 480px) {
    // bootstrap grid extra small
    .mainContainer {
      padding: var(--main-padding);
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin: 0%;
    }
  }

  @media screen and (min-width: 576px) {
    // bootstrap grid small
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    // bootstrap grid medium
  }
  @media screen and (min-width: 900px) {
  }
  @media screen and (min-width: 992px) {
    // bootstrap grid large
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
    // bootstrap gird extra large
    .main {
      max-width: 1280px;
    }
  }
</style>
