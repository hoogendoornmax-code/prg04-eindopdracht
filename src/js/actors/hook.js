import { Actor, Engine, Scene, Vector, DisplayMode, Keys } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Fish } from './fish.js'

export class Hook extends Actor {

    constructor() {
        super({
            width: Resources.Hook.width,
            height: Resources.Hook.height
        })


    }
    onInitialize(engine) {
        this.graphics.use(Resources.Hook.toSprite())
        this.pos = new Vector(640, -200)
        this.scale = new Vector(0.5, 0.5)
        this.vel = new Vector(0, 100)
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Down)) {
            if (this.vel.y > 0) {
                this.vel = new Vector(0, -300)
            }
        }
        if (this.pos.y >= 360 && this.vel.y > 0) {
            this.vel = new Vector(0, -300)
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            this.vel = new Vector(200, this.vel.y)
        } else if (engine.input.keyboard.isHeld(Keys.Left)) {
            this.vel = new Vector(-200, this.vel.y)
        } else {
            this.vel = new Vector(0, this.vel.y)
        }
    }

    onCollisionStart(event, other) {
        const collider = other || event.other
        const otherActor = collider && (collider.owner || collider)
        if (!otherActor) return


        if (otherActor instanceof Fish) {
            otherActor.kill()
        }
    }
}