<script>
  let oldScroll = 0;
  let navPos = "0px";
  window.onscroll = () => {
    if (window.scrollY > oldScroll)
    {
      navPos = "-60px";
    }
    else
    {
      navPos = "0px"
    }
    oldScroll = window.scrollY;
    //oldScroll = 
  }
</script>

<div style="--navPos: {navPos}" class="navContainer min-vw-100 position-fixed d-flex justify-content-center">
<header class="w-100">
  <nav class="w-100 d-flex justify-content-between px-5">
    <div class="align-items-center d-flex">
    </div>
    <div class="d-flex justify-content-md-end justify-content-center">
      <div class="d-flex row align-items-center">
        <div class="col text-center">
          <a href="/#projects">projects </a>
        </div>
        <div class="col">
          <a href="/#contact">contact </a>
        </div>
        <div class="col text-center">
          <a class=" text-center" href="/#about">about </a>
        </div>
        <div class="col">
          <a href="/resume">resume </a>
        </div>
      </div>
    </div>
  </nav>
</header>
</div>

<style lang="scss">
  :root {
    --navPos: 0px;
  }
  .navContainer
  {
    background-color:
    rgba(34, 31, 59, 0.85);
    z-index: var(--z-layer-2);
    top: var(--navPos);
    transition: top linear .1s;
    backdrop-filter: blur(6px);
  }
  header {
    //max-width: 1280px;
  }
  nav {
    height: var(--nav-bar-height);
    opacity: 0;
    animation: fadeInAnimation ease 0.8s;
    animation-delay: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
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
