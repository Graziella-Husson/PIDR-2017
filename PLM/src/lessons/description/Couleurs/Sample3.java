package lessons.description.Couleurs;

import java.io.IOException;

import plm.core.model.Game;
import plm.core.model.lesson.ExerciseTemplated;
import plm.core.model.lesson.Lesson;
import plm.universe.BrokenWorldFileException;
import plm.universe.World;
import plm.universe.bugglequest.BuggleWorld;

public class Sample3 extends ExerciseTemplated {
	
	public Sample3(Game game, Lesson lesson) throws IOException, BrokenWorldFileException {
		super(game, lesson);
		tabName = "Sample3";
		this.setToolbox();
				
		/* Create initial situation */
		World[] myWorlds = new World[] {
				BuggleWorld.newFromFile(game, "lessons/description/Map3"),
		};
		for (World w: myWorlds)
			w.setDelay(50); // moving a bit faster than usual
		
		setup(myWorlds);
	}	
	
}
