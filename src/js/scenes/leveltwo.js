import { Actor, Color, FadeInOut, Font, FontUnit, Keys, Label, Scene, Vector } from "excalibur"
import { Resources } from "../resources.js"
import { Boat } from "../actors/boat.js"
import { Rod } from "../actors/rod.js"
import { Hook } from "../actors/hook.js"

export class LevelTwo extends Scene {
    onInitialize(engine) {
        const background2 = new Actor({
            // Background position
            x: engine.halfDrawWidth,
            y: engine.halfDrawHeight,
            width: engine.drawWidth,
            height: engine.drawHeight,
            z: -1,
        })
        background2.graphics.use(Resources.Background2.toSprite())
        this.add(background2)
        background2.scale = new Vector(1.3, 1.5)

        const h = new Hook()
        this.add(h)

    }

}