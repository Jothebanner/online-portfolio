<script>
  import MNPicture from "../assets/MysticNetworkingTempImage.png";
  import csharpLogo from "../assets/csharpLogo.png";
  import gitLogo from "../assets/github-mark-white.svg";
  import jsLightLogo from "../assets/JS-light.svg";
</script>

<section class="sectionSeparater" id="project">
  <div
    class="sectionHeader fs-1 font-weight-bold font-color-primary d-flex justify-content-start mb-5"
  >
    Recent Notable Projects
  </div>

  <div class="d-flex col-12">
    <div class="grid g-container">
      <div class="g-header row d-flex col-12">
        <h2
          class="fs-2 font-weight-bold font-color-primary col-9 col-md-12 text-start text-md-end align-items-center justify-content-md-end d-flex"
        >
          <a
            class="header-link"
            href="https://github.com/Jothebanner/MysticNetworking"
          >
            MysticNetworking
          </a>
        </h2>
        <a
          class="p-3 col-3 col-md-12 text-end"
          href="https://github.com/Jothebanner/MysticNetworking"
        >
          <img
            class="image-fluid rounded link svg-hl"
            alt="GitHub Logo"
            src={gitLogo}
          />
        </a>
      </div>
      <p
        class="g-description text rounded p-3 d-flex align-items-center z-index-layer-1"
      >
        Dynamic, code-validation focused C# TCP/UDP networking solution. Low
        level control over the packets that you're working with. Through
        Reflection the user is able to build packets through custom data-types
        which are then able to be validated during runtime.
      </p>
      <div class="image g-image blend col">
        <a href="https://github.com/Jothebanner/MysticNetworking">
          <img
            class="image-fluid rounded mw-100 h-100"
            alt="Screenshot of code"
            src={MNPicture}
          />
        </a>
      </div>
      <div class="g-tech row d-flex justify-content-center align-items-center">
        <img
          class="image-fluid rounded mw-100 tech col-6"
          alt="C-Sharp Logo"
          src={csharpLogo}
        />
        <h2 class="col-6">.Net Sockets</h2>
      </div>
    </div>
  </div>

  <div class="d-flex col-12 mt-12">
    <div class="grid g-container">
      <div class="g-header-left row d-flex col-12">
        <h2
          class="fs-2 font-weight-bold text-start font-color-primary col-9 col-md-12 align-items-center justify-content-md-start d-flex"
        >
          <a
            class="header-link"
            href="https://github.com/Jothebanner/MysticNetworking"
          >
            GEngineJS
          </a>
        </h2>
        <a
          class="p-3 col-3 col-md-12 text-end text-md-start"
          href="https://github.com/Jothebanner/CanvasGameEngine"
        >
          <img
            class="image-fluid rounded link svg-hl"
            alt="GitHub Logo"
            src={gitLogo}
          />
        </a>
      </div>
      <p
        class="g-description-right text rounded p-3 d-flex align-items-center z-index-layer-1"
      >
        A basic game engine build with ECMAScript based on concepts from Unity,
        Godot, and ECMAScript. I designed it with modularity in mind; the engine
        is a series compatible projects which can support the creation of
        web-based/interactive graphics.
      </p>
      <div class="image g-image-left blend col">
        <a href="https://github.com/Jothebanner/MysticNetworking">
          <img
            class="image-fluid rounded mw-100 h-100"
            alt="Screenshot of code"
            src={MNPicture}
          />
        </a>
      </div>
      <div
        class="g-tech-right row d-flex justify-content-center align-items-center"
      >
        <img
          class="image-fluid rounded mw-100 tech col-6"
          alt="JS Logo"
          src={jsLightLogo}
        />
        <h2 class="col-6">HTML Canvas</h2>
      </div>
    </div>
  </div>

  <!-- <div class="d-flex col-12 mt-12">
    <div class="grid g-container">
      <div class="g-header text-end">
        <h2 class="fs-2 font-weight-bold font-color-primary">
          <a
            class="header-link"
            href="https://github.com/Jothebanner/MysticNetworking"
          >
            MysticNetworking
          </a>
        </h2>
        <a class="p-3" href="https://github.com/Jothebanner/MysticNetworking">
          <img
            class="image-fluid rounded link col-6 svg-hl"
            alt="GitHub Logo"
            src={gitLogo}
          />
        </a>
      </div>
      <p
        class="g-description text rounded p-3 d-flex align-items-center z-index-layer-1"
      >
        Dynamic, code-validation focused C# TCP/UDP networking solution. Low
        level control over the packets that you're working with. Through
        Reflection the user is able to build packets through custom data-types
        which are then able to be validated during runtime.
      </p>
      <div class="image g-image blend col">
        <a href="https://github.com/Jothebanner/MysticNetworking">
          <img
            class="image-fluid rounded mw-100"
            alt="Screenshot of code"
            src={MNPicture}
          />
        </a>
      </div>
      <div class="g-tech row d-flex justify-content-center align-items-center">
        <img
          class="image-fluid rounded mw-100 tech col-6"
          alt="C-Sharp Logo"
          src={csharpLogo}
        />
        <h2 class="col-6">.Net Sockets</h2>
      </div>
    </div>
  </div> -->
</section>

<style lang="scss">
  img {
    z-index: -1;
    overflow: hidden;
  }
  .blend:hover {
    opacity: 0.8;
    mix-blend-mode: screen;
  }
  .mt-12 {
    margin-top: 12vw;
  }
  .text {
    background-color: rgba(49, 45, 85, 0.6);
    backdrop-filter: blur(5px);
    color: var(--secondary-color);
    font-size: clamp(15px, 1.5vw, 20px);
    height: min-content;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    //grid-template-columns: auto auto auto auto;
  }
  .tech {
    max-width: clamp(80px, 8vw, 100px) !important;
    padding: 0.8em;
  }
  .link {
    max-width: clamp(20px, 2vw, 50px);
  }
  .g-header {
    grid-area: 1 / 8 / span 1 / span 5;
  }
  .g-description {
    grid-area: 1 / 1 / span 3 / span 5;
  }
  .g-image {
    grid-area: 3 / 5 / span 3 / span 8;
  }
  .g-tech {
    grid-area: 4 / 1 / span 1 / span 4;
  }
  .g-header-left {
    grid-area: 1 / 1 / span 1 / span 5;
  }
  .g-description-right {
    grid-area: 1 / 8 / span 3 / span 5;
  }
  .g-image-left {
    grid-area: 3 / 1 / span 3 / span 8;
  }
  .g-tech-right {
    grid-area: 4 / 9 / span 1 / span 4;
  }
  .z-index-layer-1 {
    z-index: var(--z-layer-1);
  }
  @media screen and (max-width: 480px) {
    // bootstrap grid extra small
  }
  @media screen and (max-width: 767px) {
    .text {
      font-size: clamp(15px, 1.5vw, 20px);
      margin: 0px;
      height: auto;
    }
    img {
      z-index: -1;
      overflow: hidden;
    }
    .g-header {
      grid-area: 1 / 1 / span 1 / span 13;
    }
    .g-description {
      grid-area: 2 / 1 / span 3 / span 13;
    }
    .g-image {
      grid-area: 2 / 1 / span 3 / span 13;
    }
    .g-tech {
      grid-area: 5 / 1 / span 1 / span 13;
    }
    .g-header-left {
      grid-area: 1 / 1 / span 1 / span 13;
    }
    .g-description-right {
      grid-area: 2 / 1 / span 3 / span 13;
    }
    .g-image-left {
      grid-area: 2 / 1 / span 3 / span 13;
    }
    .g-tech-right {
      grid-area: 5 / 1 / span 1 / span 13;
    }
  }
</style>
