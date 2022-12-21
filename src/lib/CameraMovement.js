import GameComponentBase from "gameworkjs/GameComponentBase";
import InputSingleton from "gameworkjs/InputSingleton.js";

class CameraMovement extends GameComponentBase {
    constructor(camera) {
        super();
        this.camera = camera;
        this.horPos = 0;
        this.vertPos = 0;
        this.horSpeedMod = 0.04;
        this.vertSpeedMod = 0.05;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.innerWidth = window.innerWidth;
    }

    start() {
        if (!(screen && screen.width < 480))
            window.addEventListener('mousemove', this.mouseMove);
    }

    mouseMove = (event) => {
        this.horPos = event.pageX;
        this.vertPos = event.pageY;
    }

    frameUpdate() {
        // this definitely doesn't belong here
        if (window.innerWidth != this.innerWidth) {
            window.dispatchEvent(new Event('resize'));
            this.innerWidth = window.innerWidth;
        }


        // if(InputSingleton.getInstance().getKey("q"))
        // {
        //     this.camera.position.z += 0.2;
        // }

        // if(InputSingleton.getInstance().getKey("d"))
        // {
        //     this.camera.position.x += 50;
        // }

        // if(InputSingleton.getInstance().getKey("a"))
        // {
        //     this.camera.position.x -= 50;
        // }

        // if(InputSingleton.getInstance().getKey("w"))
        // {
        //     this.camera.position.y += 50;
        // }

        // if(InputSingleton.getInstance().getKey("s"))
        // {
        //     this.camera.position.y -= 50;
        // }
        //console.log(this.horPos);

        if (this.horPos < (window.innerWidth / 2)) {
            this.xSpeed = (this.horPos - (window.innerWidth / 2));
        }
        else if (this.horPos > (window.innerWidth / 2)) {
            this.xSpeed = this.horPos - (window.innerWidth / 2);
        }

        if (this.vertPos < (window.innerHeight / 2)) {
            this.ySpeed = this.vertPos - (window.innerHeight / 2);
        }
        else if (this.vertPos > (window.innerHeight / 2)) {
            this.ySpeed = this.vertPos - (window.innerHeight / 2);
        }

        //console.log(this.xSpeed + " " + this.ySpeed);
        //console.log(this.horPos + " " + this.vertPos);

        this.xSpeed *= this.horSpeedMod;
        this.ySpeed *= this.vertSpeedMod;

        if (screen && screen.width < 480) {
            this.xSpeed = 0;
            this.ySpeed = 0;
        }

        this.camera.position.x += this.xSpeed;
        this.camera.position.y -= this.ySpeed;
        this.camera.position.z += 0.05;

        //console.log(window.innerWidth);
    }

    // Tasmanian Glow By Strawberry Girls

    lateUpdate() {
        //TODO: this does not belong here lol
        InputSingleton.getInstance().clearArrays();
    }
}

export default CameraMovement;