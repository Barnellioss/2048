export default function gameOverFunc(arr) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {

      if (i === 0 && j === 0) {
        if (arr[i][j].score === arr[i + 1][j].score || arr[i][j].score === arr[i][j + 1].score) {
          return false;
        }
      }

      if (i === 0 && (j === 1 || j === 2)) {
        if (arr[i][j].score === arr[i + 1][j].score || arr[i][j].score === arr[i][j + 1].score || arr[i][j].score === arr[i][j - 1].score) {
          return false
        }
      }

      if (i === 0 && j === 3) {
        if (arr[i][j].score === arr[i + 1][j].score || arr[i][j].score === arr[i][j - 1].score) {
          return false;
        }
      }

      if ((i === 1 || i === 2) && j === 0) {
        if (arr[i][j].score === arr[i + 1][j].score || arr[i][j].score === arr[i - 1][j].score || arr[i][j].score === arr[i][j + 1].score) {
          return false;
        }
      }

      if ((i === 1 || i === 2) && (j === 1 || j === 2)) {
        if (arr[i][j].score === arr[i + 1][j].score || arr[i][j].score === arr[i - 1][j].score || arr[i][j].score === arr[i][j + 1].score || arr[i][j].score === arr[i][j - 1].score) {
          return false;
        }
      }

      if ((i === 1 || i === 2) && j === 3) {
        if (arr[i][j].score === arr[i + 1][j].score || arr[i][j].score === arr[i - 1][j].score || arr[i][j].score === arr[i][j - 1].score) {
          return false;
        }
      }

      if (i === 3 && j === 0) {
        if (arr[i][j].score === arr[i - 1][j].score || arr[i][j].score === arr[i][j + 1].score) {
          return false;
        }
      }


      if (i === 3 && j === 3) {
        if (arr[i][j].score === arr[i - 1][j].score || arr[i][j].score === arr[i][j - 1].score) {
          return false;
        }
      }

       if (i === 3 && (j === 1 || j === 2)) {
        if (arr[i][j].score === arr[i - 1][j].score || arr[i][j].score === arr[i][j - 1].score || arr[i][j].score === arr[i][j + 1].score) {
          return false;
        }
      }

    }
  }

  return true;
}
