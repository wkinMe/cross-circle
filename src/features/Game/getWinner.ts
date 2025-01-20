import { Directions } from "./Directions";

export function getWinDirection(field: string[][], sign: string): Directions {
    let signCount = 0;

    for (let i = 0; i < field.length; i++) {
        if (field[i][i] == sign) signCount++;
        if (signCount == 3) {
            return Directions.MAIN_DIAG;
        }
    }

    signCount = 0;

    for (let i = 0; i < field.length; i++) {
        let j = field.length - 1 - i;
        if (field[i][j] == sign) signCount++;
        if (signCount == 3) {
            return Directions.SEC_DIAG;
        }
    }

    signCount = 0;

    for (let i = 0; i < field.length; i++) {
        signCount = 0;
        for (let j = 0; j < field.length; j++) {
            if (field[i][j] == sign) signCount++;
        }
        if (signCount == 3) {
            switch (i) {
                case 0:
                    return Directions.UP_HORIZONT
                case 1:
                    return Directions.CENTER_HORIZONT
                case 2:
                    return Directions.DOWN_HORIZONT
            }
        }
    }

    signCount = 0;

    for (let i = 0; i < field.length; i++) {
        signCount = 0;
        let j;
        for (j = 0; j < field.length; j++) {
            if (field[j][i] == sign) signCount++;
            if (signCount == 3) {
                break;
            }
        }
        if (signCount == 3) {
            switch (i) {
                case 0:
                    return Directions.LEFT_VERTICAL
                case 1:
                    return Directions.CENTER_VERTICAL
                case 2:
                    return Directions.RIGHT_VERTICAL
            }
        }
    }

    return Directions.NOTHING;
}