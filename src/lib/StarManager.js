import GameComponentBase from "gameworkjs/GameComponentBase.js";
import InputSingleton from "gameworkjs/InputSingleton.js";
import SquareRenderer from "gameworkjs/SquareRenderer.js";
import Vector3 from "gameworkjs/Vector3.js";

class StarManager extends GameComponentBase {
    constructor(camera, starDensity, background) {
        super();
        this.camera = camera;
        this.activeStars = [];
        this.starDensity = window.innerWidth/starDensity;
        this.starPool = [];
        this.back = background;
        //this.xFovMod = 0;
        this.starterStars = 300;
        
    }

    start() {
        for (let i = 0; i < this.starterStars; i++) {
            
            let starVector = this.generateStarVector(this.camera);
            let starSize = 50 * Math.random();
            let star = new SquareRenderer("white", new Vector3(starVector.x/4, starVector.y/4, Math.pow(2, 5) * Math.random()), starSize, starSize);


            this.back.addChild(star);
            this.activeStars.push(star);
            window.dispatchEvent(new Event('resize'));
        }
    }

    // I never want to think about this ever again.
    frameUpdate() {

        let dropVar = 4;
        for (let star of this.activeStars) {

            if (InputSingleton.getInstance().getKey("p")) {
                let pos = star.getPosition();
                star.setPosition(new Vector3(pos.x + 50, pos.y, pos.z));
            }


            let theThingX = (((this.camera.resolution.x / 2) * (star.getPosition().z - this.camera.getPosition().z)) / 1 + ((this.camera.getPosition().x)));
            let theThingXNeg = (((this.camera.resolution.x / 2) * (star.getPosition().z - this.camera.getPosition().z)) / 1 - ((this.camera.getPosition().x)));
            let theThingY = (((this.camera.resolution.y / 2) * (star.getPosition().z - this.camera.getPosition().z)) / 1 + ((this.camera.getPosition().y)));
            let theThingYNeg = (((this.camera.resolution.y / 2) * (star.getPosition().z - this.camera.getPosition().z)) / 1 - ((this.camera.getPosition().y)));
            //console.log("The kill zone: " + theThing);
            //console.log("Camera x: " + this.camera.getPosition().x);
            // if (star.getPosition().x > theThing)
            // {
            //     console.log("it works!")
            // }

            if (star.position.z < this.camera.getPosition().z || star.getPosition().x > theThingX || star.getPosition().x < -theThingXNeg || star.getPosition().y > theThingY || star.getPosition().y < -theThingYNeg) {
                //console.log('boop');
                star.setEnabled(false);
                this.starPool.push(star);
                let index = this.activeStars.findIndex(activeStar => star == activeStar)
                this.activeStars.splice(index, 1);
            }
        }

        if (this.activeStars.length + this.starPool.length < this.starDensity)
        {
            for (let i = 0; i < 100; i++)
            {
                let star = this.createNewStar();
                star.setEnabled(true);
                this.activeStars.push(star);
            }
        }

        if (this.starPool.length > 0) {
            let count = 0;
            for (let star of this.starPool) {
                //console.log(star);
                let starVector = this.generateStarVector(this.camera);
                star.setPosition(starVector);
                star.setEnabled(true);
                this.starPool.shift();
                this.activeStars.push(star);
                //console.log(star.getPosition());
                count++;
                if (count > 100)
                    break;

            }
        }

        //console.log(this.starPool.length);
    }

    generateStarVector = (camera) => {
        let z = Math.max(40, Math.pow(3, 4) * Math.random());
        z += camera.getPosition().z;

        let x = Math.random() * (camera.resolution.x / 2) * (z - camera.getPosition().z) * (Math.random() * 2 > 1 ? 1 : -1);

        x = Math.random() * (camera.resolution.x / 2) * (z - camera.getPosition().z) * (Math.random() * 2 > 1 ? 1 : -1);
        x += camera.getPosition().x;

        let y = Math.random() * (camera.resolution.y / 2) * (z - camera.getPosition().z) * (Math.random() * 2 > 1 ? 1 : -1);
        y += camera.getPosition().y;


        //console.log(x + " " + y + " " + z);

        return new Vector3(x, y, z);
    }

    createNewStar = () => {
            let starVector = this.generateStarVector(this.camera);
            let starSize = 50 * Math.random();
            let star = new SquareRenderer("white", starVector, starSize, starSize);
            //console.log(star.isEnabled());
            //console.log(star);

            return star;
    }

    // Tasmanian Glow By Strawberry Girls

    lateUpdate() {
        //TODO: this does not belong here lol
        InputSingleton.getInstance().clearArrays();
    }
}

export default StarManager;