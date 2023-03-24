export default function calculateSum(array) {
    return array.flat().filter(a => typeof a.score === 'number').reduce((acc, value) => acc + value.score, 0)
  }