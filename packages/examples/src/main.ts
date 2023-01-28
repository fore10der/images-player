import range from "./utils/range";
import Sequencer from "@images-player/core";
const body = document.querySelector("body")

if (body) {

    const images = range(4701, 76).map((value) => `/assets/pig/DSC0${value}.JPG`)


    const image = document.createElement('img')

    const sequencer = new Sequencer(images, image)

    body.append(image)

    sequencer.load().then(() => console.log('loaded'))
}