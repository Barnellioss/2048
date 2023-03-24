export default function numberOfEmptySpacesFunc(array) {
    return array.map(a => a.filter(b => b.score === "")).flat().length
}