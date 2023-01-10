<script>
  import MNPicture from "../assets/MysticNetworkingTempImage.png";
  import GWJSThumbnail from "../assets/GameWorkJSThumbnail.png";
  import csharpLogo from "../assets/csharpLogo.png";
  import gitLogo from "../assets/github-mark-white.svg";
  import jsLightLogo from "../assets/JS-light.svg";
  import TypeWriter from "./TypeWriter.svelte";

  let code = `  import CameraMovement from "./CameraMovement.js";
  import StarManager from "./StarManager.js";
  import Camera from "gameworkjs/Camera.js";
  import Vector3 from "gameworkjs/Vector3.js";
  import GameObject from "gameworkjs/GameObject";
  import { onMount } from "svelte";

  let canvas = null;
  onMount(() => {
    let mainObject = new GameObject();

    // give the camera something to output to
    mainObject.addChild(camera);
    mainObject.addChild(new CameraMovement(camera));
    mainObject.addChild(new StarManager(camera, 1, mainObject)); // one star per resolution..... unit? Pixel density?? Idk, it looks good :D
    sizeWindow();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let aspectRatio = { x: 16, y: 9 };

    let camera = new Camera(canvas.getContext("2d"), new Vector3(0, 0, -5), {
      x: aspectRatio.x,
      y: aspectRatio.y,
    });

    function sizeWindow() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      aspectRatio = { x: canvas.width / 120, y: canvas.height / 120 };
      camera.aspectRatio = aspectRatio;
    }
    sizeWindow();
    window.addEventListener("resize", sizeWindow);

  });
    <canvas class="fadeOut position-absolute w-100" bind:this={canvas} />

  .fadeOut {
    mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
    -webkit-mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
  }`;
</script>

<section class="sectionSeparater" id="projects">
  <div
    class="sectionHeader fs-1 font-weight-bold font-color-primary d-flex justify-content-start mb-5"
  >
    Recent Notable Projects
  </div>

  <div class="d-flex col-12">
    <div class="grid g-container">
      <div class="g-header row d-flex col-12 hl-links">
        <h2
          class="fs-2 font-weight-bold font-color-primary col-9 col-md-12 text-start text-md-end align-items-center justify-content-md-end d-flex p-0"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="header-link"
            href="https://github.com/Jothebanner/MysticNetworking"
          >
            MysticNetworking
          </a>
        </h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="col-3 col-md-12 text-end p-0 min-height-50 d-flex justify-content-end align-items-center"
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Jothebanner/MysticNetworking"
        >
          <img
            class="image-fluid rounded mw-100 background-image"
            alt="Screenshot of code"
            src={MNPicture}
          />
        </a>
      </div>
      <div class="g-tech row d-flex justify-content-center align-items-center">
        <img
          class="image-fluid rounded mw-100 tech col-6 col-md-12 col-lg-6"
          alt="C-Sharp Logo"
          src={csharpLogo}
        />
        <h2 class="col-6 col-md-12 col-lg-6">.Net Sockets</h2>
      </div>
    </div>
  </div>

  <div class="d-flex col-12 mt-12">
    <div class="grid g-container">
      <div class="g-header-left row d-flex col-12 p-md-3 hl-links">
        <h2
          class="fs-2 font-weight-bold text-start font-color-primary col-9 col-md-12 align-items-center justify-content-md-start d-flex p-0"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="header-link"
            href="https://github.com/Jothebanner/GameWorkJS"
          >
            GameWorkJS
          </a>
        </h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="col-3 col-md-12 text-end text-md-start p-0 min-height-50 d-flex justify-content-end justify-content-md-start align-items-center"
          href="https://github.com/Jothebanner/GameWorkJS"
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
        A basic game engine built with ECMAScript based on concepts from Unity,
        Godot, and ECMAScript. I designed it with modularity in mind; the engine
        is a series compatible projects which can support the creation of
        web-based/interactive graphics.
      </p>
      <div class="image g-image-left blend col typeWriter">
        <TypeWriter code={code}></TypeWriter>
        <!-- <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Jothebanner/GameWorkJS"
        >
          <img
            class="image-fluid rounded mw-100 background-image"
            alt="Screenshot of code"
            src={GWJSThumbnail}
          />
        </a> -->
      </div>
      <div
        class="g-tech-right row d-flex justify-content-center align-items-center"
      >
        <img
          class="image-fluid tech rounded mw-100 col-6 col-md-12 col-lg-6"
          alt="JS Logo"
          src={jsLightLogo}
        />
      <div class="col-6 col-md-12 col-lg-6">
        <h2 class="">HTML Canvas</h2>
      </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  img {
    overflow: hidden;
  }
  
  .blend:hover {
    filter: opacity(90%) saturate(100%) brightness(120%);
  }

  .hl-links h2:hover + a {
    
    filter: opacity(50%) invert(32%) sepia(39%) saturate(709%) hue-rotate(230deg)
    brightness(94%) contrast(93%);
  }

  .mt-12 {
    margin-top: 12vw;
  }
  .text {
    background-color: rgba(49, 45, 85, 0.6);
    backdrop-filter: blur(5px);
    color: var(--secondary-color);
    font-size: clamp(10px, 1.3vw, 16px);
    padding-right: calc(1em + .75vw) !important;
    padding-left: calc(1em + .75vw) !important;
    margin: 0;
    // height: min-content;
  }
  .grid {
    display: grid;
    // grid-template-columns: repeat(12, 1fr);
    //grid-template-columns: 1fr;
    // grid-auto-flow: row;
  }
  .tech {
    max-width: clamp(80px, 8vw, 85px) !important;
    padding: 0.8em;
  }
  .min-height-50
  {
    min-height: 50px;
  }
  .link {
    max-width: clamp(20px, 2vw, 50px);
  }
  .typeWriter {
    min-width: 50vw;
    max-width: 50vw;
    min-height: 25vw;
    max-height: 25vw;
    background-color: rgb(36, 38, 44);
    border-top-style: solid;
    border-left-style: solid;
    border-color: rgb(43, 49, 53);
  }
  .g-header {
    grid-area: 1 / 9 / span 1 / span 3;
  }
  .g-description {
    grid-area: 1 / 2 / span 4 / span 6;
  }
  .g-image {
    grid-area: 3 / 7 / span 3 / span 5;
  }
  .g-tech {
    grid-area: 5 / 1 / span 1 / span 7;
  }
  .g-header-left {
    grid-area: 1 / 2 / span 2 / span 3;
  }
  .g-description-right {
    grid-area: 1 / 7 / span 3 / span 6;
  }
  .g-image-left {
    grid-area: 3 / 2 / span 5 / span 6;
  }
  .g-tech-right {
    grid-area: 4 / 9 / span 4 / span 3;
  }
  .z-index-layer-1 {
    z-index: var(--z-layer-1);
  }
    .image {
    }
  @media screen and (max-width: 480px) {
    // bootstrap grid extra small
  }
  
  @media screen and (max-width: 992px)
  {
    .header-link
    {
      font-size: calc(1.325rem) !important;
    }
    .typeWriter {
      min-width: 45vw;
      min-height: 20vw;
      max-height: 25vw;
      background-color: rgb(36, 38, 44);
      border-top-style: solid;
      border-left-style: solid;
      border-color: rgb(43, 49, 53);
  }
  }
  @media screen and (max-width: 767px) {
    .header-link
    {
      font-size: calc(1.325rem + 0.7vw) !important;
    }
    .text {
      font-size: clamp(15px, 1.5vw, 20px);
      margin: 0px;
      height: auto;
    }
    img {
      z-index: -1;
      overflow: hidden;
    }
    .background-image
    {
      height: 100%;
    }
    .typeWriter {
      min-height: 100%;
      max-width: unset;
      background-color: rgb(36, 38, 44);
      border-top-style: solid;
      border-left-style: solid;
      border-color: rgb(43, 49, 53);
  }
    .g-header {
      grid-area: 1 / 2 / span 1 / span 13;
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
      grid-area: 1 / 2 / span 1 / span 13;
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
