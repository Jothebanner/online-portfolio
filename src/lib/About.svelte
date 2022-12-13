<script>
  import jsLightLogo from "../assets/JS-light.svg";
  import csharpLogo from "../assets/csharpLogo.png";
  import reactLogo from "../assets/reactLogo.svg";
</script>

<section class="sectionSeparater" id="about">
  <div
    class="sectionHeader fs-1 font-weight-bold font-color-primary d-flex justify-content-start mb-5"
  >
    About Me
  </div>
  <div class="row col-12 d-flex justify-content-center m-0">
    <div class="col-12 //col-md-6 order-2 //order-md-1 width-max-content d-flex justify-content-center">
      <!-- <img class="image-fluid" alt="It me" /> -->
      <div class="d-flex row col-12 col-md-6 align-items-center justify-content-around">
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
        <div class="col-4">
          <h2 class="align-content-center m-1">SQL</h2>
        </div>
        <div class="col-4">
          <h2 class="align-content-center m-1">NoSQL</h2>
        </div>
      </div>
    </div>
    <div class="row //col-md-6 col-12 order-1 //order-md-2 p-3 rounded d-flex justify-content-center m-0">
      <p class="p-2 col-12 text-start">
        I am a self-motivated, ever-curious, result-driven software engineer. I
        graduated from DavisTech with a 3.94 GPA and have worked towards
        excellence since. I enjoyed working with my peers during my internships
        and I am eager to work with a team again.
      </p>
      <p class="p-2 col-12 text-start">
        Recently I've been working on a variety of explorative projects to
        discover in which focus my passion lies. So far, I know that I'm drawn
        towards quality-oriented, intuitive solutions in full-stack web/app
        development, game development, and the underlying systems that make them
        possible.
      </p>
    </div>
  </div>
</section>

<style lang="scss">
  .grid-padding
  {
    padding: calc(var(--bs-gutter-x) * 0.5) calc(var(--bs-gutter-x) * 0.5);
  }
  @media screen and (max-width: 767px) {
    
  }
  @media screen and (min-width: 768px) {
    .order-md-1 {
      order: 1;
    }
    .order-md-2 {
      order: 2;
    }
  }
</style>
