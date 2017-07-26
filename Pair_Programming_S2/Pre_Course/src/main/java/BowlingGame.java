import java.io.*;
import java.util.*;

public class BowlingGame {

	public void preprocessbowlingCode(String bowlingCode, Vector<Integer> Scores, Map<Integer, Character> Tags)
	{
		String[] Codes = bowlingCode.split("\\|");
		
		int Index = 0;
		for (int i=0; i<Codes.length; i++)
		{
			if (i < 10)
			{
				switch (Codes[i].length()) 
				{
				case 1:
					Tags.put(Index, 'X');
					break;
				case 2:
					if (Codes[i].charAt(1) == '/')
						Tags.put(Index, '/');
					else
						Tags.put(Index, 'N');
					break;
				default:
					break;
				}
				Index += Codes[i].length();
			}
			
			for (int k=0; k<Codes[i].length(); k++)
			{
				switch (Codes[i].charAt(k))
				{
				case 'X':
					Scores.add(10);
					break;
				case '/':
					{
					Scores.add(10 - Character.getNumericValue(Codes[i].charAt(k-1)));
					break;
					}			
				case '-':
					Scores.add(0);
					break;
				default:
					{
					Scores.add(Character.getNumericValue(Codes[i].charAt(k)));
					break;
					}
				}
			}
		}
	}


    public int getBowlingScore(String bowlingCode) {
        
    	int Sum = 0;
    	
    	Vector<Integer> Scores = new Vector<Integer>();
    	Map<Integer, Character> Tags = new HashMap<Integer, Character>();
		
		preprocessbowlingCode(bowlingCode, Scores, Tags);
			
    	for (Map.Entry<Integer, Character> Tag : Tags.entrySet()) {

			Integer Index = Tag.getKey();
			
    		switch (Tag.getValue())
    		{
    		case 'X':
    		case '/':
				Sum = Sum + Scores.get(Index) + Scores.get(Index + 1) + Scores.get(Index + 2);
				break;
			case 'N':
				Sum = Sum + Scores.get(Index) + Scores.get(Index + 1);
				break;
			default:
				break;
    		}
    	}
	
    	return Sum;
    }
}
