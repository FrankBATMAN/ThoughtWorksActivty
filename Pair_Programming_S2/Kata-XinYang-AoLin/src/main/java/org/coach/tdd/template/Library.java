package org.coach.tdd.template;

public class Library {

    private int[][] array;
    private int row;
    private int col;

    public int calculateCellState(int[][] unitArray) {
        int result;
        int count = countNumber(unitArray);
        if (count == 3) {
            result = 1;
        } else if (count == 2) {
            result = unitArray[1][1];
        } else {
            result = 0;
        }
        return result;
    }

    public int countNumber(int[][] unitArray) {
        int count = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (i == 1 && j == 1) {
                    continue;
                }
                if (unitArray[i][j] == 1) {
                    count++;
                }
            }
        }
        return count;
    }

    public void generateArray(int vRow, int vCol, int vNumAlive, int[][] vAliveCellCoords) {
        row = vRow;
        col = vCol;
        array = new int[row + 2][col + 2];
        for (int i = 0; i < vNumAlive; i++) {
            array[vAliveCellCoords[i][0] + 1][vAliveCellCoords[i][1] + 1] = 1;
        }

    }

    public int getArrayByIndex(int vRowIndex, int vColIndex) {
        return array[vRowIndex + 1][vColIndex + 1];
    }

    public void runGame() {

        int[][] nextArray = new int[row + 2][col + 2];

        for (int i = 0; i < row; i++) {
            for (int k = 0; k < col; k++) {
                int[][] unitArray = {{array[i][k], array[i][k + 1], array[i][k + 2]},
                        {array[i + 1][k], array[i + 1][k + 1], array[i + 1][k + 2]},
                        {array[i + 2][k], array[i + 2][k + 1], array[i + 2][k + 2]}};
                nextArray[i + 1][k + 1] = calculateCellState(unitArray);
            }
        }

        for (int i = 0; i < row + 2; i++) {
            for (int k = 0; k < col + 2; k++) {
                array[i][k] = nextArray[i][k];
            }
        }

        printArray();
    }

    public void printArray() {
        for (int i = 0; i < row; i++) {
            for (int k = 0; k < col; k++) {
                if (array[i + 1][k + 1] == 0) {
                    System.out.print("*" + " ");
                } else {
                    System.out.print("^" + " ");
                }
            }
            System.out.println();
        }
        System.out.println("-------------------------");
    }
}
