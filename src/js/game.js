import '../css/style.css'
import { Actor, Engine, Scene, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { StartScene } from './scenes/start.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }
    startGame() {
        const startScene = new StartScene()
        const gameScene = new Scene()

        const background = new Actor({
            x: 640,
            y: 360,
            width: 1280,
            height: 720,
            z: -1
        })
        background.graphics.use(Resources.Background.toSprite())

        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(500, 300)
        fish.vel = new Vector(-10, 0)
        fish.on("exitviewport", (e) => this.fishLeft(e))

        gameScene.add(background)
        // gameScene.add(fish)

        this.addScene("start", startScene)
        this.addScene("game", gameScene)
        this.goToScene("start")
    }

    fishLeft(e) {
        e.target.pos = new Vector(1350, 300)
    }
}

new Game()
