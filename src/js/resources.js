import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Shark: new ImageSource('images/shark.png'),
    Background: new ImageSource('images/Achtergrond lava.png'),
    Boat: new ImageSource('images/boat.png'),
    Rod: new ImageSource('images/rod.png'),
    Background2: new ImageSource('images/background2.avif')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

ResourceLoader.suppressPlayButton = true


export { Resources, ResourceLoader }