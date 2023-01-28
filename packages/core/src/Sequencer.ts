class Sequencer {

    #images: string[] = []
    #element: HTMLImageElement

    constructor(images: string[], private element: HTMLImageElement) {
        this.#images = images
        this.#element = element
    }

    async load() {
        return Promise.all(this.#images.map((image) => fetch(image, {
            cache: 'force-cache'
        })))
    }

    async mount() {

    }
}

export default Sequencer