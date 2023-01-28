export default function range(start: number, count: number) {
    return Array.apply(0, Array(count - 1))
        .map((_, index) => index + start);
}