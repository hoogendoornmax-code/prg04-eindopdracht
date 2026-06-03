
import { Actor, Engine, Scene, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Rod extends Actor {
    constructor() {
        super({
            width: Resources.Rod.width,
            height: Resources.Rod.height
        })
    }
    onInitialize(engine) {
        this.graphics.use(Resources.Rod.toSprite())
        this.pos = new Vector(790, 560)
        this.scale = new Vector(0.3, 0.3)

        // Move up in a zig-zag by repeated moveBy's
        this.actions.repeat((repeatCtx) => {
            repeatCtx.moveBy(0, 10, 10)
            repeatCtx.moveBy(0, -10, 10)
        }, 5)
    }



}