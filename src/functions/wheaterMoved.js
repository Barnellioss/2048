export default function wheaterMoved(oldArr, newArr) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (oldArr[i][j].score !== newArr[i][j].score) {
        return true
      }
    }
  }
  return false;
}