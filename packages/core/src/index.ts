export class Counter {
   #value: number = 0

    increase() {
       this.#value++
    }

    decrease() {
       this.#value--
    }

    getValue() {
       return this.#value
    }
}