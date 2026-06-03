import '../css/style.css'
import { Actor, Engine, Scene, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { StartScene } from './scenes/start.js'
import { LevelOne } from './scenes/levelone.js'
import { LevelTwo } from './scenes/leveltwo.js'

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


        this.addScene("start", new StartScene())
        this.addScene("game", new LevelOne())
        this.addScene("leveltwo", new LevelTwo())
        this.goToScene("start")
    }

}

new Game()
