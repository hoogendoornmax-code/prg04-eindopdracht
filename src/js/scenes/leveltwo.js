import { Actor, Color, FadeInOut, Font, FontUnit, Keys, Label, Scene, Vector, randomInRange } from "excalibur"
import { Resources } from "../resources.js"
import { Boat } from "../actors/boat.js"
import { Rod } from "../actors/rod.js"
import { Hook } from "../actors/hook.js"
import { Fish } from "../actors/fish.js"

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

        this.hook = new Hook()
        this.add(this.hook)

        this.hook.on("exitviewport", () => {
            engine.goToScene("levelthree", {
                sceneActivationData: {
                    hitFish: this.hook.hitFish
                },
                sourceOut: new FadeInOut({ duration: 600, direction: 'out' }),
                destinationIn: new FadeInOut({ duration: 600, direction: 'in' })
            })
        })

        for (let i = 0; i < 10; i++) {
            const f = new Fish()
            this.add(f)
        }

    }

    onActivate() {
        if (this.hook) {
            this.hook.reset()
        }
    }

}