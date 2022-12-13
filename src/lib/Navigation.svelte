<script lang="ts">
  import { onMount } from "svelte";
  import PlanetLogo from "../assets/planet-saturn.svg";
  import Resume from "../assets/JacobHawks_SoftwareEngineering.pdf";

  let oldScroll: number = 0;
  let navPos: string = "0px";
  window.onscroll = () => {
    if (window.scrollY > oldScroll) {
      navPos = "-60px";
      if (x || d) {
        x = !x;
        d = !d;
        nc = ! nc;
      }
    } else {
      navPos = "0px";
    }
    oldScroll = window.scrollY;
    //oldScroll =
  };

  let x = false;
  let d = false;
  let nc = false;

  let toggleHamburger = () => {
    x = !x;
    d = !d;
    nc = !nc
  };
</script>

<div
  style="--navPos: {navPos}"
  class="navContainer position-fixed d-flex justify-content-center"
>
  <header class="w-100">
    <nav class="w-100 d-flex px-2 px-sm-4 justify-content-between align-items-sm-center">
      <a
        class="d-flex justify-content-start align-items-center col-3"
        href="#intro"
      >
        <img class="image-fluid logo" src={PlanetLogo} alt="Planet Logo" />
      </a>
      <div class="col-md-auto" />
      <div
        class="d-flex col-7 col-md-6 mw-400 justify-content-end flex-wrap flex-sm-nowrap"
        class:nc
      >
        <a
          class="nav-toggle position-absolute d-flex d-sm-none"
          on:click={toggleHamburger}
        >
          <span class="bar" class:x />
          <span class="bar" class:x />
          <span class="bar" class:x />
        </a>
        <div class="col col-sm-3 text-center d-none d-sm-block m-1 mt-3 mt-sm-0" class:d>
          <a href="/#project">projects </a>
        </div>
        <div class="col col-sm-3 text-center d-none d-sm-block m-1 m-sm-0" class:d>
          <a class=" text-center" href="/#about">about </a>
        </div>
        <div class="col col-sm-3 text-center d-none d-sm-block m-1 m-sm-0" class:d>
          <a href="#contact">contact </a>
        </div>
        <div class="col col-sm-3 text-center d-none d-sm-block m-1 m-sm-0" class:d>
          <a
            class="fancy resume" target="_blank" rel="noopener noreferrer"
            href={Resume}
            >resume
          </a>
        </div>
      </div>
    </nav>
  </header>
</div>

<style lang="scss">
  // yoink https://css-tricks.com/line-on-sides-headers/
  // .fancy {
  //   line-height: 0.5;
  //   text-align: center;
  // }
  // .fancy span {
  //   display: inline-block;
  //   position: relative;
  // }
  // .fancy span:before,
  // .fancy span:after {
  //   content: "";
  //   position: absolute;
  //   height: 5px;
  //   border-bottom: 1px solid var(--highlight-color);
  //   top: 0;
  //   width: clamp(5px, 1vw, 10px);
  // }
  // .fancy span:before {
  //   right: 100%;
  //   margin-right: 2px;
  // }
  // .fancy span:after {
  //   left: 100%;
  //   margin-left: 2px;
  // }
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
  .navContainer {
    background-color: rgba(34, 31, 59, 0.5);
    z-index: var(--z-layer-2);
    top: var(--navPos);
    transition: top linear 0.1s;
    backdrop-filter: blur(6px);
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
    height: 80px;
  }

  //yoink https://stackoverflow.com/questions/70703929/hamburger-icon-css-animation-into-an-x
  .nav-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //width: 40px;
    padding: 0.8em;
    height: 3.55em;
    z-index: var(--z-layer-9);
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
    .nav-width {
      width: 38px;
    }
  }

  @media screen and (min-width: 576px) {
    .d {
      background-color: transparent;
    }
    .nc 
    {
      background-color: transparent;
    }
  }

  @media screen and (max-width: 576px) {
  }
</style>
