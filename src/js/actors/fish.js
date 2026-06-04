import { Actor, Engine, Scene, Vector, DisplayMode, Keys, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Fish extends Actor {
    constructor() {
        super({
            width: Resources.Fish.width,
            height: Resources.Fish.height
        })
    }
    onInitialize(engine) {
        this.graphics.use(Resources.Fish.toSprite())
        this.graphics.flipHorizontal = true
        this.pos = new Vector(randomInRange(500, 0), randomInRange(0, 720))
        this.vel = new Vector(randomInRange(50, 100), 0)
        this.events.on("exitviewport", (e) => this.fishright(e))
        this.scale = new Vector(randomInRange(0.1, 0.13), randomInRange(0.1, 0.13))
    }

    fishright(e) {
        e.target.pos = new Vector(-100, randomInRange(0, 720))
    }
}