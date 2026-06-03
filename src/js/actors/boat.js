
import { Actor, Engine, Scene, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Boat extends Actor {
    constructor() {
        super({
            width: Resources.Boat.width,
            height: Resources.Boat.height
        })
    }
    onInitialize(engine) {
        this.graphics.use(Resources.Boat.toSprite())
        this.pos = new Vector(600, 550)
        this.scale = new Vector(0.5, 0.5)

        // Move up in a zig-zag by repeated moveBy's
        this.actions.repeat((repeatCtx) => {
            repeatCtx.moveBy(0, 10, 10)
            repeatCtx.moveBy(0, -10, 10)
        }, 5)
    }



}