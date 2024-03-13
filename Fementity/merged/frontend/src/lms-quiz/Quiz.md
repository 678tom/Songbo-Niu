# Quiz file format

All quizzes are stored in a .JSON file format. 
This is what the Quiz and QuizEditor components read in. When calling any of these components, you pass them the filepath to a JSON file.  

As of right now, all quiz JSON files are stored in public/quizdata. 

## Example

The following is an example of a quizfile  JSON. 

```json
{
  "quizTitle": "My quiz",
  "quiz": [
   	 {
     	"question": "Alice has 10 apples. Marisa took 1. How many apples does Alice have?",
      	"answers": ["0", "9", "4"],
      	"correctAnswer": "1"
    	},
    	{
      	"question": "Where is the Killam library located?",
      	"answers": [
        	"University Avenue",
        	"Spring Garden Road"
      	],
      	"correctAnswer": "0"
    	},
		{
		"question": "Jet is cooking supper for his crew of 3 others and a dog. How much bell peppers and beef does he need to prepare?",
		"answers": ["4 servings", 
					"5 servings",
					"3 servings"],
		"correctAnswer": "1"
		}
	]
}
```

'quizTitle' is just the title of the quiz.

'quiz' is an array of objects. Each object contains a 'question' (a string), 'answers' (an array), and 'correctAnswer', which stores the index of the correct answer in 'answers'. 

QuizEditor has built in checks to prevent the user from removing a question if a Quiz only has one question in it, and to also prevent the user from removing an answer if a Question object only has two answers. There are no upper limits (yet) on how many questions or answers a quiz can possibly have, though I wouldn't go too crazy in fear of something breaking. It's your call though. 

While you could just edit quizfile JSONs by hand, they were designed to be edited via a user interface. As it stands, there are no checks outside the QuizEditor component to make sure that a quizfile is valid. If you do edit a quizfile by hand, make sure that there is at least one question object in a quiz, that the 
'answers' array in that object has at least 2 answers, and that correctAnswer is a valid index in 'answers'. 