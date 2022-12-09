
  <section id="introSection">
    <div class="text-start">
      <h1>
        <span id="hi">Hi</span><span id="comma">, </span><span id="me-area"
          >I'm <span id="me">Jacob</span></span
        >
      </h1>
      <h2 class="fadeup-enter">Software Engineer</h2>
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
  #introSection {
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0px;
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
