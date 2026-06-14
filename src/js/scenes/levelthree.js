import { Actor, Color, FadeInOut, Font, FontUnit, Keys, Label, Scene, Vector, randomInRange } from "excalibur"
import { Resources } from "../resources.js"
import { Boat } from "../actors/boat.js"
import { Rod } from "../actors/rod.js"

export class LevelThree extends Scene {
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
            text: "Press arrow down to continue",
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

        //score
        this.scoreLabel = new Label({
            text: "",
            pos: new Vector(engine.halfDrawWidth, engine.halfDrawHeight + 100),
            font: new Font({
                size: 64,
                unit: FontUnit.Px,
                color: Color.fromHex('#FFF8E1'),
                strokeColor: Color.fromHex('#4A2C2A'),
                lineWidth: 3,
            })
        })
        this.scoreLabel.anchor = new Vector(0.5, 0.5)
        this.add(this.scoreLabel)

        this.scoreLabel.text = ""
    }

    onActivate(context) {
        if (context.data?.hitFish) {
            this.updateScore()
        } else {
            this.scoreLabel.text = "Better luck next time"
        }
    }

    updateScore() {
        const score = Math.floor(randomInRange(1, 1000))

        let fishType = "fish3"
        if (score <= 200) {
            fishType = "fish1"
        } else if (score <= 600) {
            fishType = "fish2"
        }

        let fishText = ""

        if (fishType === "fish1") {
            fishText = "You caught a paddington"
        } else if (fishType === "fish2") {
            fishText = "You caught a steijn"
        } else {
            fishText = "You caught Fish y"
        }

        this.scoreLabel.text = `score = ${score}\n${fishText}`
    }

    //cast rod
    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Down)) {
            engine.goToScene("game", {
                sourceOut: new FadeInOut({ duration: 600, direction: 'out' }),
                destinationIn: new FadeInOut({ duration: 600, direction: 'in' })
            })
        }
    }
}
