package org.coach.tdd.template;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class LibraryTest {

    private Library conwayGame;

    @Before
    public void setUp() throws Exception {
        conwayGame = new Library();
    }

    @Test
    public void shouldCellBeAliveWhenThreeOtherCellsAround() {
        int[][] unitArrayThree = {{1, 1, 0}, {1, 0, 0}, {0, 0, 0}};
        assertEquals(1, conwayGame.calculateCellState(unitArrayThree));
    }

    @Test
    public void shouldCellStayStateWhenTwoOtherCellsAround() {
        int[][] unitArrayZero = {{1, 1, 0}, {0, 0, 0}, {0, 0, 0}};
        int[][] unitArrayOne = {{1, 1, 0}, {0, 1, 0}, {0, 0, 0}};
        assertEquals(0, conwayGame.calculateCellState(unitArrayZero));
        assertEquals(1, conwayGame.calculateCellState(unitArrayOne));
    }

    @Test
    public void shouldCellDieWhenAroundNumIsNotTwoAndThree() {
        int[][] unitArrayFour = {{1, 1, 0}, {0, 1, 0}, {1, 1, 0}};
        int[][] unitArrayOne = {{0, 1, 0}, {0, 1, 0}, {0, 0, 0}};
        assertEquals(0, conwayGame.calculateCellState(unitArrayFour));
        assertEquals(0, conwayGame.calculateCellState(unitArrayOne));
    }

    @Test
    public void isGeneratedOArrayRight() {
        int[][] array = {{1, 1, 0}, {1, 0, 0}, {0, 1, 1}};
        int row = 3;
        int col = 3;
        int numAlive = 5;
        int[][] aliveCellCoords = {{0, 0}, {0, 1}, {1, 0}, {2, 1}, {2, 2}};
        conwayGame.generateArray(row, col, numAlive, aliveCellCoords);

        for (int i = 0; i < 3; i++) {
            for (int k = 0; k < 3; k++) {
                assertEquals(array[i][k], conwayGame.getArrayByIndex(i, k));
            }
        }
    }

    @Test
    public void isGameRunRightPerFrame() {
        int[][] array = {{1, 1, 0}, {1, 0, 1}, {0, 1, 0}};
        int row = 3;
        int col = 3;
        int numAlive = 5;
        int[][] aliveCellCoords = {{0, 0}, {0, 1}, {1, 0}, {2, 1}, {2, 2}};
        conwayGame.generateArray(row, col, numAlive, aliveCellCoords);
        conwayGame.runGame();

        for (int i = 0; i < 3; i++) {
            for (int k = 0; k < 3; k++) {
                assertEquals(array[i][k], conwayGame.getArrayByIndex(i, k));
            }
        }
    }

    @Test
    public void integrationTestWhenUpdateThreeTimes() {
        int row = 5;
        int col = 5;
        int numAlive = 9;
        int[][] aliveCellCoords = {{0, 0}, {0, 4}, {1, 1}, {1, 3}, {2, 2}, {3, 1}, {3, 3}, {4, 0}, {4, 4}};
        conwayGame.generateArray(row, col, numAlive, aliveCellCoords);
        for (int i = 0; i < 3; i++) {
            conwayGame.runGame();
        }
    }


}
