package lessons.description.Faim;

import java.io.IOException;

/*import lessons.description.exercice.Sample1;
import lessons.description.exercice.Sample2;
import lessons.description.exercice.Sample3;
import lessons.description.exercice.Sample4;
*/
import lessons.description.Faim.Sample4;
import plm.core.model.Game;
import plm.core.model.lesson.Lesson;
import plm.universe.BrokenWorldFileException;

public class Main extends Lesson {
	
	public Main(Game game) {
		super(game);		
	}

	@Override
	protected void loadExercises() throws IOException, BrokenWorldFileException {
		/*addExercise(new Sample1(getGame(), this));		
		addExercise(new Sample2(getGame(), this));
		addExercise(new Sample3(getGame(), this));
		*/
		addExercise(new Sample4(getGame(), this));
		
	}
	
}
