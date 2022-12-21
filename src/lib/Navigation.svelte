<script lang="ts">
  import { onMount } from "svelte";
  import PlanetLogo from "../assets/planet-saturn.svg";
  import Resume from "../assets/JacobHawks_SoftwareEngineering.pdf";
  import Socials from "./Socials.svelte";

  let oldScroll: number = 0;
  let trigger = false;

  onMount(() => {
    oldScroll = window.scrollY;
    navRetract = false;
  })
  let blurFactor: string = "1px";
  window.onscroll = () => {
    if (window.scrollY > oldScroll && trigger) {
      blurFactor = "6px";
      if (x || d) {
        x = !x;
        d = !d;
        nc = !nc;
      }
      navRetract = true;
    } else if (window.scrollY < oldScroll) {
      navRetract = false;
    }
    trigger = true;
    oldScroll = window.scrollY;
  };

  let navRetract = false;

  let x = false;
  let d = false;
  let nc = false;

  let toggleHamburger = () => {
    x = !x;
    d = !d;
    nc = !nc;
  };
</script>

<div
  style="--blurFactor: {blurFactor};"
  class="navContainer position-fixed d-flex justify-content-center"
>
  <header class="w-100">
    <nav
      class="w-100 d-flex px-2 px-sm-4 justify-content-between align-items-sm-center"
    >
      <a
        class="d-flex justify-content-start align-items-center col-4 col-sm-1 col-md-2 col-lg-3 col-xl-4"
        href="#intro"
      >
        <img
          class="image-fluid logo nav-padding position-fixed transition-lin-100 weirdTopThingForPlanetSvg"
          src={PlanetLogo}
          alt="Planet Logo"
          class:navRetract
        />
      </a>
      <Socials />
      <div
        class="d-flex col-4 col-sm-6 mw-400 col-xl-4 justify-content-end flex-wrap flex-sm-nowrap position-relative transition-lin-100" class:navRetract
        class:nc
      >
        <a
          class="nav-toggle nav-padding position-absolute d-flex d-sm-none"
          on:click={toggleHamburger}
        >
          <span class="bar" class:x />
          <span class="bar" class:x />
          <span class="bar" class:x />
        </a>
        <div
          class="col col-sm-3 text-center d-none d-sm-block m-sm-1 p-1 pt-sm-0 dropDownNav"
          class:d
        >
          <a class=" text-center" href="/#about">about </a>
        </div>
        <div
          class="col col-sm-3 text-center d-none d-sm-block m-sm-1 p-1 pt-3 pt-sm-0 dropDownNav"
          class:d
        >
          <a href="/#project">projects </a>
        </div>
        <div
          class="col col-sm-3 text-center d-none d-sm-block m-sm-1 p-1 pt-sm-0 dropDownNav"
          class:d
        >
          <a href="#contact">contact </a>
        </div>
        <div
          class="col col-sm-3 text-center d-none d-sm-block m-sm-1 p-1 pt-sm-0 dropDownNav"
          class:d
        >
          <a
            class="fancy resume"
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1hBmK73cLfrJM6m2vvPu_xkwwECWFThW-D9xfbZE3hc0/edit?usp=sharing"
            >resume
          </a>
        </div>
      </div>
    </nav>
  </header>
</div>

<style lang="scss">
  .resume {
    padding: 0 calc(clamp(9px, 1vw, 12px) + 1px);
    border-style: none none solid none !important;
    border-color: var(--highlight-color);
    border-bottom: var(--highlight-color);
  }
  // end-yoink https://css-tricks.com/line-on-sides-headers/
  :root {
    --navPos: 0px;
  }

  .transition-lin-100
  {
    top: 0;
    transition: top linear 0.1s;
  }

  .weirdTopThingForPlanetSvg
  {
    top:-10px;
  }

  .navContainer {
    background-color: rgba(34, 31, 59, 0.5);
    z-index: var(--z-layer-2);
    backdrop-filter: blur(var(--blurFactor));
    width: 100%;
    left: 0px;
  }
  nav {
    height: var(--nav-bar-height);
    opacity: 0;
    animation: fadeInAnimation ease 0.8s;
    animation-delay: 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  .logo {
    max-width: clamp(80px, 8vw, 80px) !important;
  }

  .nav-padding {
    padding: 0.8em;
  }

  //yoink https://stackoverflow.com/questions/70703929/hamburger-icon-css-animation-into-an-x
  .nav-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //width: 40px;
    height: 3.55em;
    z-index: var(--z-layer-9);
    top: 0.2em;
  }

  .bar {
    background-color: var(--highlight-color);
    z-index: var(--z-layer-9);
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s var(--easing), background 0.5s var(--easing),
    opacity 0.55s ease;

    //transform: rotate(180deg);
  }

  .nav-toggle:hover {
    cursor: pointer;
  }

  .bar:nth-of-type(1) {
    transform-origin: 100% 0%;
  }

  .bar:nth-of-type(3) {
    transform-origin: 100% 0%;
  }

  .x {
    opacity: 1;
    background-color: var(--highlight-color);
    z-index: var(--z-layer-9);
  }

  .x:nth-of-type(1) {
    opacity: 1;
    transform: rotate(-45deg) translate(1px, -2px);
    width: 36px;
  }

  .x:nth-of-type(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  .x:nth-of-type(3) {
    transform: rotate(45deg) translate(2px, -1px);
    width: 36px;
  }

  .d {
    display: block !important;
    width: 100%;
    flex: auto;
  }

  .nc {
    background-color: var(--background-highlight-color);
    height: min-content;
    min-width: 50px;
  }
  .navRetract {
    top: -60px;
  }

  //yoink https://stackoverflow.com/questions/70703929/hamburger-icon-css-animation-into-an-x
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    .nav-toggle .bar {
      position: relative !important;
    }
  }

  @media screen and (min-width: 576px) {
    .d {
      background-color: transparent;
    }
    .nc {
      background-color: transparent;
    }
  }

  @media screen and (max-width: 576px) {
    .dropDownNav {
      min-width: 180px;
      background-color: var(--background-highlight-color);
      z-index: var(--z-layer-4);
    }
  }
  @media screen and (min-width: 1200px) {
    // bootstrap gird extra large
    
  }
</style>
