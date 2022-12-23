<script lang="js">
  import CameraMovement from "./CameraMovement.js";
  import StarManager from "./StarManager.js";
  import Camera from "gameworkjs/Camera.js";
  import Vector3 from "gameworkjs/Vector3.js";
  import GameObject from "gameworkjs/GameObject";
  import { onMount } from "svelte";

  let canvas = null;
  onMount(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let aspectRatio = { x: 16, y: 9 };

    let camera = new Camera(canvas.getContext("2d"), new Vector3(0, 0, -5), {
      x: aspectRatio.x,
      y: aspectRatio.y,
    });

    function sizeWindow() {
      // this is just temporary.
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      aspectRatio = { x: canvas.width / 120, y: canvas.height / 120 };
      camera.aspectRatio = aspectRatio;
    }
    sizeWindow();
    window.addEventListener("resize", sizeWindow);

    let mainObject = new GameObject();

    // give the camera something to output to
    mainObject.addChild(camera);
    mainObject.addChild(new CameraMovement(camera));
    mainObject.addChild(new StarManager(camera, 1, mainObject)); // one star per resolution..... unit? Pixel density?? Idk, it looks good :D
    sizeWindow();

    // function pausePlay() {
    //   console.log(window.scrollY + " " + window.innerHeight/2);
    //   if (window.scrollY > window.innerHeight/2)
    //   {
    //     mainObject.setEnabled(false);
    //     console.log("hitting");
    //   }
    //   else
    //   {
    //     mainObject.setEnabled(true);
    //     console.log("hitting 2");
    //   }
    // }
    // window.addEventListener("scroll", pausePlay);

  });
</script>
    <canvas class="fadeOut position-absolute w-100" bind:this={canvas} />

<style lang="scss">
  .fadeOut {
    mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
    -webkit-mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
  }
</style>
