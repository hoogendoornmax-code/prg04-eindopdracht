import { Actor, Color, Delay, FadeInOut, Font, FontUnit, Keys, Label, Scene, Vector } from "excalibur"
import { Resources } from "../resources.js"
import { Boat } from "../actors/boat.js"
import { Rod } from "../actors/rod.js"

export class LevelOne extends Scene {
    onInitialize(engine) {
        const background = new Actor({
            // Background position
            x: engine.halfDrawWidth,
            y: engine.halfDrawHeight,
            width: engine.drawWidth,
            height: engine.drawHeight,
            z: -1,
        })
        background.graphics.use(Resources.Background.toSprite())
        this.add(background)
        background.scale = new Vector(0.85, 0.8)



        let b = new Boat()
        this.add(b)

        let r = new Rod()
        this.add(r)

    }

    // Go to level 2
    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            engine.goToScene("leveltwo", {
                // transition
                sourceOut: new FadeInOut({ duration: 600, direction: 'out' }),
                destinationIn: new FadeInOut({ duration: 600, direction: 'in' })
            })
        }
    }
}