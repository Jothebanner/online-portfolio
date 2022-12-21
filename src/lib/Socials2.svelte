<script>
  import gitLogo from "../assets/github-mark-white.svg";
  import linkedInLogo from "../assets/linkedin.svg";
  import codePenLogo from "../assets/codepen.svg";
  import { onMount } from "svelte";
  import ScrollReveal from "scrollreveal";

  let options = {
    show: 50,
    threshold: 100,
    opacity: 0,
    duration: 1000,
    origin: "bottom",
    distance: "20px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
  };

  onMount(() => {
    ScrollReveal().reveal(".fadeup-enter2", options);
  });
</script>
<div class="justify-content-center d-flex">
<div
  class="d-flex row col-12 col-md-4 align-items-center justify-content-around m-0 fadeup-enter2"
>
  <div class="col-4 grid-padding">
    <a
      target="_blank"
      rel="noopener noreferrer"
      class=""
      href="https://www.linkedin.com/in/jacobghawks/"
    >
      <img
        class="image-fluid svg-hl w-100 "
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
</div>

<style lang="scss">
  .image-fluid {
    max-width: 60px;
  }
</style>
