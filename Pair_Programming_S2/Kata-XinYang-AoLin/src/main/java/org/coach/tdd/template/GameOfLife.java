package org.coach.tdd.template;

import java.util.Scanner;

public class GameOfLife {
    private static int row;
    private static int col;
    private static int number;
    private static int[][] aliveCellCoords;
    private static Library game;


    public static void main(String[] args) {

        game = new Library();
        game.generateArray(row, col, number, aliveCellCoords);

        boolean shouldStop = false;
        while (!shouldStop) {
            game.runGame();
        }
    }

    public void scan() {
        Scanner input = new Scanner(System.in);
        System.out.println("输入行数：");
        row = input.nextInt();
        System.out.println("输入列数：");
        col = input.nextInt();
        System.out.println("输入存活的点数：");
        number = input.nextInt();
        aliveCellCoords = new int[number][2];
        System.out.println("输入点对：");
        for (int i = 0; i < number; i++) {
            int tempRow = input.nextInt();
            int tempCol = input.nextInt();
            if (tempRow >= row || tempCol >= col) {
                System.out.println("输入超出边界,请重新输入第" + i + 1 + "点对");
                continue;
            }
            aliveCellCoords[i][0] = tempRow;
            aliveCellCoords[i][1] = tempCol;
        }
    }
}
