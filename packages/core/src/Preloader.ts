
export interface ImageLoadCallback {
    id: number,
    img: HTMLImageElement,
    count: number,
    total: number
}

export interface QueueCompleteCallback {
    total: number
}

export function Preloader(loadedArray: HTMLImageElement[], images: string[],
                          imageLoadCallback: (options: ImageLoadCallback) => void = () => null,
                          queueCompleteCallback: (options: QueueCompleteCallback) => void = () => null) {
    const concurrentLoads = Math.min(images.length, 4)
    let current = loadedArray.length - 1 // id: order in array
    let count = loadedArray.length       // count: count of image loaded... can be out of sync of id.
    for (let i=0; i<concurrentLoads; i++) loadNext()

    function loadNext() {
        if (current >= images.length -1) return
        current++

        const img = new Image()
        img.src = images[current]
        ;(function(id) {    // TODO: fix
            img.onload = e => {
                imageLoadCallback({
                    id    : id,
                    img   : img,
                    count : ++count,
                    total : images.length
                })
                if (count < images.length ) {
                    loadNext()
                }
                if (count == images.length) {
                    queueCompleteCallback({
                        total : images.length
                    })
                }
            }
            img.onerror = e => {
                console.error('Error with: ' + images[id])
            }
        })(current)
        loadedArray.push(img)
    }
}