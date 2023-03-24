export function removePop(arr) {
    arr = arr.map(a => a.map(b => {
        if (b.class = "pop") {
            return { score: b.score, class: "" }
        }
        else return b
    }))
    return arr;
}