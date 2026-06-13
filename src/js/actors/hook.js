import { Actor, Engine, Scene, Vector, DisplayMode, Keys } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Fish } from './fish.js'

export class Hook extends Actor {

    constructor() {
        super({
            width: Resources.Hook.width,
            height: Resources.Hook.height
        })
        this.collisionTimer = 0
        this.hitFish = false

    }
    onInitialize(engine) {
        this.graphics.use(Resources.Hook.toSprite())
        this.pos = new Vector(640, -200)
        this.scale = new Vector(0.5, 0.5)
        this.vel = new Vector(0, 100)

        //hitbox 
        this.collider.useBoxCollider(
            Resources.Hook.width * 0.4,
            Resources.Hook.height * 0.08,
            Vector.Half,
            new Vector(0, Resources.Hook.height * 0.2)
        )
    }

    reset() {
        this.collisionTimer = 0
        this.hitFish = false
        this.vel = new Vector(0, 100)
        this.pos = new Vector(640, -200)
    }

    onPreUpdate(engine) {
        this.collisionTimer++

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
        if (this.collisionTimer < 20) return
        if (this.hitFish) return

        const collider = other || event.other
        const otherActor = collider && (collider.owner || collider)
        if (!otherActor) return


        if (otherActor instanceof Fish) {
            this.hitFish = true
            otherActor.kill()
            this.vel = new Vector(0, -300)
        }
    }
}