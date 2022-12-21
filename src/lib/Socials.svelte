<script>
  import gitLogo from "../assets/github-mark-white.svg";
  import linkedInLogo from "../assets/linkedin.svg";
  import codePenLogo from "../assets/codepen.svg";
  import { onMount } from "svelte";

  let oldScroll = 0;
  let fadeOut = false;
  let fadeIn = false;
  let opacity;
  let opacity100 = false;
  let socialRest = false;
  onMount(() => {
    opacity = "0%";
    //opacity100 = true;
    oldScroll = window.scrollY;
  });
  window.onload = () => {
    opacity100 = true;
  };
  addEventListener("scroll", (event) => {
    // console.log(
    //   window.scrollY +
    //     window.innerHeight +
    //     " = " +
    //     document.documentElement.scrollHeight
    // );
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 100
    ) {
      //socialRest = true;
    } else socialRest = false;

    if (window.scrollY > oldScroll) {
      fadeOut = true;
      fadeIn = false;
      opacity100 = false;
    } else if (window.scrollY < oldScroll) {
      fadeOut = false;
      fadeIn = true;
    }
    oldScroll = window.scrollY;
    //oldScroll =
  });
</script>

<div
  class="d-flex row align-content-center justify-content-sm-start justify-content-center socials-container col-4 col-sm-2 col-lg-3 col-xl-4"
  class:socialRest
>
  <div
    class="d-flex crib position-relative p-0"
    class:opacity100
    class:fadeOut
    class:fadeIn
  >
    <div class="col-4 grid-padding">
      <a
        target="_blank"
        rel="noopener noreferrer"
        class=""
        href="https://www.linkedin.com/in/jacobghawks/"
      >
        <img
          class="image-fluid svg-hl w-100"
          alt="LinkedIn Logo Link"
          src={linkedInLogo}
        />
      </a>
    </div>
    <div class="col-4 grid-padding">
      <a
        target="_blank"
        rel="noopener noreferrer"
        class=""
        href="https://github.com/Jothebanner"
      >
        <img
          class="image-fluid svg-hl w-100"
          alt="GitHub Logo Link"
          src={gitLogo}
        />
      </a>
    </div>
    <div class="col-4 grid-padding">
      <a
        target="_blank"
        rel="noopener noreferrer"
        class=""
        href="https://codepen.io/Jothebanner"
      >
        <img
          class="image-fluid svg-hl w-100"
          alt="CodePen Logo Link"
          src={codePenLogo}
        />
      </a>
    </div>
  </div>
  <div class="col-4 col-sm-6 col-md-4" />
</div>

<style lang="scss">
  :root {
    --opacity: 0%;
  }
  img {
    max-height: 50px;
    max-width: 50px;
  }
  .socials-container {
    z-index: var(--z-layer-3);
    //margin-left: calc(0.8em + 80px + 10vw);
    height: 60px;
  }
  .socials-container img {
    max-width: 40px;
  }

  .socialRest {
    position: relative;
    min-width: auto;
  }
  .crib {
    position: relative;
    z-index: var(--z-layer-3);
  }

  .crib img {
    --opacity: 0%;
    opacity: var(--opacity);
    transition: opacity 0.5s;
    -webkit-transition-duration: opacity 0.5s;
    position: relative;
  }

  .opacity100 img {
    transition: opacity 2s;
    transition-delay: 1.5s;
    -webkit-transition-duration: opacity 1s;
    --opacity: 100%;
  }

  .fadeOut img {
    --opacity: 20%;
    opacity: var(--opacity) !important;
  }

  .fadeIn img {
    --opacity: 100%;
    opacity: var(--opacity) !important;
  }

  .fadeOut img:hover {
    --opacity: 100% !important;
  }

  .socialRest img {
    --opacity: 100% !important;
  }

  @media screen and (max-width: 768px) {
    // bootstrap grid medium
    .socials-container {
      left: 0;
      //margin-left: calc(0.8em + 80px + 5vw);
    }
    .socials-container img {
      max-width: 30px;
      min-width: 20px;
    }
    .crib {
      max-width: 150px;
    }
    .socialRest img {
      max-width: 50px;
      min-width: 30px;
    }
    .socialRest .crib {
      max-width: 400px;
    }
  }

  @media screen and (min-width: 768px) {
    .socials-container img {
      max-width: 30px;
    }
    .crib {
      max-width: 150px;
    }
  }

  @media screen and (min-width: 992px) {
    // bootstrap grid large
    .socials-container {
      left: 0;
      justify-content: center;
    }
    .crib {
      max-width: 200px;
    }
    .socialRest img {
    }
    .socialRest .crib {
      max-width: 600px;
    }
  }
  @media screen and (min-width: 1024px) {
    .socials-container {
      justify-content: center;
    }
    .socials-container img {
      max-width: 30px;
    }

    .socialRest img {
      max-width: 100px;
      min-width: 100px;
    }
  }

  @media screen and (min-width: 1200px) {
    // bootstrap gird extra large
    .socials-container {
      max-width: 100vw;
      left: 0;
      justify-content: center !important;
    }
  }
</style>
