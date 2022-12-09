<script>
  import MNPicture from "../assets/MysticNetworkingTempImage.png";
  import csharpLogo from "../assets/csharpLogo.png";
  import gitLogo from "../assets/github-mark-white.svg";
</script>

<section id="projectSection">
  <div class="d-flex col-12">
    <div class="grid g-container">
      <div class="g-header text-end">
        <h2 class="fs-1 font-weight-bold-flex font-color-primary">
          MysticNetworking
        </h2>
        <a class="p-3" href="https://github.com/Jothebanner/MysticNetworking">
        <img
          class="image-fluid rounded link col-6"
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
  </div>


  <div class="d-flex col-12 projectObject">
    <div class="grid g-container">
      <div class="g-header-left text-start">
        <h2 class="fs-1 font-weight-bold-flex font-color-primary">
          <a class="header-link" href="https://github.com/Jothebanner/MysticNetworking">
          MysticNetworking
          </a>
        </h2>
        <a class="p-3" href="https://github.com/Jothebanner/MysticNetworking">
        <img
          class="image-fluid rounded link col-6 imgLink"
          alt="GitHub Logo"
          src={gitLogo}
        />
        </a>
      </div>
      <p
        class="g-description-right text rounded p-3 d-flex align-items-center z-index-layer-1"
      >
        Dynamic, code-validation focused C# TCP/UDP networking solution. Low
        level control over the packets that you're working with. Through
        Reflection the user is able to build packets through custom data-types
        which are then able to be validated during runtime.
      </p>
      <div class="image g-image-left blend col">
        <a href="https://github.com/Jothebanner/MysticNetworking">
          <img
            class="image-fluid rounded mw-100"
            alt="Screenshot of code"
            src={MNPicture}
          />
        </a>
      </div>
      <div class="g-tech-right row d-flex justify-content-center align-items-center">
        <img
          class="image-fluid rounded mw-100 tech col-6"
          alt="C-Sharp Logo"
          src={csharpLogo}
        />
        <h2 class="col-6">.Net Sockets</h2>
      </div>
    </div>
  </div>



  <div class="d-flex col-12 projectObject">
    <div class="grid g-container">
      <div class="g-header text-end">
        <h2 class="fs-1 font-weight-bold-flex font-color-primary">
          MysticNetworking
        </h2>
        <a class="p-3" href="https://github.com/Jothebanner/MysticNetworking">
        <img
          class="image-fluid rounded link col-6"
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
</section>


<!--<div class="g-content d-flex descriptionWrapper">
  <div class="height-min">
    <h2 class="">MysticNetworking</h2>
    <p class="text rounded p-3">
      Dynamic, code-validation focused C# TCP/UDP networking solution. Low
      level control over the packets that you're working with.
    </p>
  </div>
</div>-->
<style lang="scss">
  img {
    z-index: -1;
    overflow: hidden;
  }
  .imgLink:hover {
    filter: opacity(0.1) drop-shadow(.1px 0 0 var(--highlight-color)) drop-shadow(.1px 0 0 var(--highlight-color)) drop-shadow(.1px 0 0 var(--highlight-color));
  }
  .blend:hover
  {
    opacity: 0.8;
    mix-blend-mode: screen;
  }
  .projectObject
  {
    margin-top: 12vw;
  }
  .text {
    background-color: var(--background-highlight-color);
    color: var(--secondary-color);
    font-size: clamp(15px, 1.5vw, 20px);
    height: min-content;
  }
  .descriptionWrapper {
    align-items: end;
    z-index: 100;
    height: 90%;
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
  .link
  {
    max-width: 2vw;
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
  // @media screen and (min-width: 992)
  // {
  //   .g-header{
  //     grid-area: 1 / 9 / span 1 / span 4;
  //   }
  //   .g-image
  //   {
  //     grid-area: 2 / 6 / span 2 / span 8;
  //   }
  // }
</style>
