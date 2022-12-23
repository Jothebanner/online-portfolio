<script>
  import { onMount } from "svelte";
  import DownArrow from "../assets/downArrow.png";

  let options = {
    root: document.querySelector("#introDesc"),
    rootMargin: "0px",
    threshold: 1.0,
  };

  let introDesc;
  onMount(() => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries[0].target.classList.add("fade-in");
    }, { threshold: 1 });

    observer.observe(document.getElementById("introDesc"));
  });
</script>

<a
  href="/#about"
  class="bottom-1 col-12 position-absolute d-flex justify-content-center align-items-center filter-sc"
>
  <img
    id="downArrow"
    class="image-fluid w-100 "
    src={DownArrow}
    alt="Down Arrow"
  />
</a>
<section id="intro" class="mb-5">
  <div class="text-start ml-5">
    <h1>
      <span id="hi">Hi</span><span id="comma">, </span><span id="me-area"
        >I'm <span id="me">Jacob</span></span
      >
    </h1>
    <!-- <h2 class="fadeup-enter">Wecome to my portfolio! </h2> -->
    <h5 id="introDesc" class="col-12 col-md-6 fadeup-enter">
      I'm a software engineer who enjoys solving complex problems and creating
      interactive experiences.
    </h5>
  </div>
</section>

<style lang="scss">
  #hi {
    animation: fadeInAnimation var(--easing) 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  #comma {
    animation: fadeInAnimation ease 1.2s;
    opacity: 0;
    animation-delay: 0.3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  #me-area {
    opacity: 0;
    animation: fadeInAnimation ease 0.8s;
    animation-delay: 0.7s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  #me {
    font-weight: 600;
  }
  #intro {
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    flex-direction: column;
    min-height: 100vh;
    padding: 0px;
  }
  #downArrow {
    max-width: clamp(20px, 4vw, 30px) !important;
    animation: 2s linear 1s infinite alternate fadeInAnimation;
  }
  #introDesc {
    opacity: 0;
    transform: translate( 0, 20px);
    transition: all var(--easing) 1.3s;
    transition-delay: 1s;
  }
  :global(.fade-in) {
    opacity: 100% !important;
    transform: translate( 0, 0px) !important;
  }

  @keyframes throbber {
    0% {
      color: white;
    }
    100% {
      color: purple;
    }
  }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
