import { Actor, Color, FadeInOut, Font, FontUnit, Keys, Label, Scene, Vector } from "excalibur"
import { Resources } from "../resources.js"
import { Boat } from "../actors/boat.js"
import { Rod } from "../actors/rod.js"

export class LevelOne extends Scene {
    onInitialize(engine) {
        const background = new Actor({
            x: engine.halfDrawWidth,
            y: engine.halfDrawHeight,
            width: engine.drawWidth,
            height: engine.drawHeight,
            z: -1,
        })
        background.graphics.use(Resources.Background.toSprite())
        this.add(background)
        background.scale = new Vector(0.85, 0.8)

        const b = new Boat()
        this.add(b)

        const r = new Rod()
        this.add(r)

        //instruction
        const instruction = new Label({
            text: "Press arrow down to cast rod",
            pos: new Vector(engine.halfDrawWidth, engine.halfDrawHeight),
            font: new Font({
                size: 64,
                unit: FontUnit.Px,
                color: Color.fromHex('#FFF8E1'),
                strokeColor: Color.fromHex('#4A2C2A'),
                lineWidth: 3,
            })
        })
        instruction.anchor = new Vector(0.5, 0.5)
        this.add(instruction)
    }

    //cast rod
    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Down)) {
            engine.goToScene("leveltwo", {
                sourceOut: new FadeInOut({ duration: 600, direction: 'out' }),
                destinationIn: new FadeInOut({ duration: 600, direction: 'in' })
            })
        }
    }
}
