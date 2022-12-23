<script>
  import jsLightLogo from "../assets/JS-light.svg";
  import csharpLogo from "../assets/csharpLogo.png";
  import reactLogo from "../assets/reactLogo.svg";
  import databaseIcon from "../assets/database.svg";
</script>

<section class="sectionSeparater" id="about">
  <div
    class="sectionHeader fs-1 font-weight-bold font-color-primary d-flex justify-content-start mb-5"
  >
    About Me
  </div>
  <div class="row col-12 d-flex justify-content-center m-0">
    <div
      class="col-12 order-2 width-max-content d-flex justify-content-center"
    >
      <!-- <img class="image-fluid" alt="It me" /> -->
      <div class="d-flex row col-12 align-items-center justify-content-around">
        <div class="col-4 grid-padding">
          <img class="image-fluid m-1 logo" alt="C# Logo" src={csharpLogo} />
        </div>
        <div class="col-4 grid-padding">
          <img class="image-fluidm-1 logo" alt="JS Logo" src={jsLightLogo} />
        </div>
        <div class="col-4 grid-padding">
          <img class="image-fluid m-1 logo" alt="React Logo" src={reactLogo} />
        </div>
        <div class="col-4 grid-padding">
          <img
            class="image-fluid m-1 logo"
            alt="Node.js Logo"
            src="https://nodejs.org/static/images/logo.svg"
          />
        </div>
        <div class="col-4 grid-padding">
          <img class="image-fluid m-1 logo" alt="React Logo" src={databaseIcon} />
        </div>
      </div>
    </div>
    <div
      class="row //col-md-6 col-12 order-1 //order-md-2 p-3 rounded d-flex justify-content-center m-0"
    >
      <p class="p-2 col-12 text-start">
        I am an enthusiast of caffeine, cooking and code! In my free time I
        enjoy mountain biking, gaming with friends and delving into interesting research topics.
      </p>
      <p class="p-2 col-12 text-start">
        Since the dawn of my cognizence I've been intrigued by technology,
        especially computers. I started learning about creating software in
        middle-school, and in highschool I started at Davis Tech; graduating early, near the top of my class.
      </p>
      <p class="p-2 col-12 text-start">
        Recently, I've been working on a variety of explorative projects to
        discover where my passion lies. So far, I've learned that I'm drawn
        towards quality-oriented, intuitive solutions particularly when it comes to full-stack web/app
        development, game development, and the underlying systems that make them
        possible.
      </p>
    </div>
  </div>
</section>

<style lang="scss">
  .grid-padding {
    padding: calc(var(--bs-gutter-x) * 0.5) calc(var(--bs-gutter-x) * 0.5);
  }
  .logo{
    height: clamp(60px, 5vw, 80px);
  }
  @media screen and (max-width: 767px) {
  }
  
</style>
