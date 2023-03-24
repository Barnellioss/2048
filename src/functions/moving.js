import { move } from "../variables/variables";
import { generator } from "./generator";
import { removePop } from "./removePop";
import wheaterMoved from "./wheaterMoved";


export default function moving(arr, arrayCopy, key, score) {
    if (move[0].includes(key)) {
        for (let i = 0; i < 4; i++) {
            for (let j = 3; j >= 0; j--) {

                if (j === 3) {
                    if (arr[i][j].class === "pop") {
                        arr[i][j] = { score: arr[i][j].score, class: "" }
                    }
                }

                let k = j;

                if (arr[i][k].score !== "" && j !== 3) {
                    while (k < 3) {
                        if (arr[i][k + 1].score === arr[i][k].score) {
                            arr[i][k + 1].score *= 2;
                            arr[i][k + 1].class = "pop"

                            score += arr[i][k + 1].score;

                            arr[i][k] = { score: "", class: "" };
                            break;
                        }
                        if (arr[i][k + 1].score !== "" && (arr[i][k + 1].score > arr[i][k].score || arr[i][k + 1].score < arr[i][k].score)) {
                            arr[i][k].class = "";
                            break;
                        }
                        if (arr[i][k + 1].score === "") {
                            arr[i][k + 1] = { score: arr[i][k].score, class: "" };
                            arr[i][k] = { score: "", class: "" };
                            k++;
                        }
                    }
                }
            }
        }
        if (wheaterMoved(arrayCopy, arr)) {
            return generator(arr, score);
        }
        else return false
    }

    if (move[1].includes(key)) {
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 3; j++) {
                if (j === 0) {
                    if (arr[i][j].class === "pop") {
                        arr[i][j] = { score: arr[i][j].score, class: "" }
                    }
                }

                let k = j;
                if (arr[i][k].score !== "" && j !== 0) {
                    while (k >= 1) {
                        if (arr[i][k - 1].score === arr[i][k].score) {
                            arr[i][k - 1].score *= 2;
                            arr[i][k - 1].class = "pop"

                            score += arr[i][k - 1].score

                            arr[i][k] = { score: "", class: "" };
                            break;
                        }
                        if (arr[i][k - 1].score !== "" && (arr[i][k - 1].score > arr[i][k].score || arr[i][k - 1].score < arr[i][k].score)) {
                            arr[i][k].class = "";
                            break;
                        }
                        if (arr[i][k - 1].score === "") {
                            arr[i][k - 1] = { score: arr[i][k].score, class: "" };
                            arr[i][k] = { score: "", class: "" };
                            k--;
                        }
                    }
                }
            }
        }
        if (wheaterMoved(arrayCopy, arr)) {
            return generator(arr, score);
        }
        else return false
    }

    if (move[2].includes(key)) {
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 3; j++) {

                if (i === 0) {
                    if (arr[j][i].class === "pop") {
                        arr[j][i] = { score: arr[j][i].score, class: "" }
                    }
                }

                let k = j;

                if (arr[k][i].score !== "" && j !== 0) {
                    while (k >= 1) {
                        if (arr[k - 1][i].score === arr[k][i].score) {
                            arr[k - 1][i].score *= 2;
                            arr[k - 1][i].class = "pop";

                            score += arr[k - 1][i].score;

                            arr[k][i] = { score: "", class: "" };
                            break;
                        }

                        if (arr[k - 1][i].score !== "" && (arr[k - 1][i].score > arr[k][i].score || arr[k - 1][i].score < arr[k][i].score)) {
                            arr[k][i].class = "";
                            break;
                        }

                        if (arr[k - 1][i].score === "") {
                            arr[k - 1][i] = { score: arr[k][i].score, class: "" };
                            arr[k][i] = { score: "", class: "" };
                            k--;
                        }
                    }
                }
            }
        }

        if (wheaterMoved(arrayCopy, arr)) {
            return generator(arr, score);
        }
        else return false
    }

    if (move[3].includes(key)) {
        for (let i = 0; i <= 3; i++) {
            for (let j = 3; j >= 0; j--) {

                if (j === 3) {
                    if (arr[j][i].class === "pop") {
                        arr[j][i] = { score: arr[j][i].score, class: "" }
                    }
                }

                let k = j;
                if (arr[k][i].score !== "" && j !== 3) {
                    while (k <= 2) {
                        if (arr[k + 1][i].score === arr[k][i].score) {
                            arr[k + 1][i].score *= 2;
                            arr[k + 1][i].class = "pop";

                            score += arr[k + 1][i].score;
                            arr[k][i] = { score: "", class: "" }
                            break;
                        }

                        if (arr[k + 1][i].score !== "" && (arr[k + 1][i].score > arr[k][i].score || arr[k + 1][i].score < arr[k][i].score)) {
                            arr[k][i].class = "";
                            break;
                        }

                        if (arr[k + 1][i].score === "") {
                            arr[k + 1][i] = { score: arr[k][i].score, class: "" };
                            arr[k][i] = { score: "", class: "" };
                            k++;
                        }
                    }
                }
            }
        }
        if (wheaterMoved(arrayCopy, arr)) {
            return generator(arr, score);
        }
        else return false
    }
    else {
        return [arr, false, score]
    }
}