import range from "./utils/range";
import { Preloader } from "@images-player/core";
const body = document.querySelector("body")

if (body) {

    const images = range(1, 351).map((value) => `/assets/intro/intro_00${value.toString().padStart(3, '0')}.webp`)

    const loadedArray: HTMLImageElement[] = []

    Preloader(loadedArray, images)

    console.log(loadedArray)
}