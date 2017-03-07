/* quiz questions 
   type: 1 = text, 2 = radio, 3 = multiplechoice, 4 = dropdown
   question:["en", "style"];

*/



var quiz = [
	{
		type: 1,
		question: ["Who is this?", "","http://fillmurray.com/300/300"], //["QUESTION TEXT, "STYLES"]
		possible_answers: ["Bill Murray","testing"] //["variations of correct answers]
	},
	{
		type: 2,
		question: ["The process of silver soldering...", ""], //["QUESTION TEXT, "STYLES"]
		possible_answers: [ //all radio buttons
			{
				answer_text: "Uses solder which melts at a lower temperature than the metal being joined",  //question
				answer: false, //correct or not (true / false)
			},
			{
				answer_text:"Uses solder which is the same colour as the metal being joined", //question
				answer: true, //correct or not (true / false)
			},
			{
				answer_text:"Uses solder which melts with the metal being joined", //question
				answer: false, //correct or not (true / false)
			}
		]
	},
	{
		type: 3,
		question: ["Which of the following metals can be silver soldered?", ""], //["QUESTION TEXT, "STYLES"]
		possible_answers: [ //all checkboxes buttons
			{
				answer_text:"Copper", //text
				answer: false, //correct or not (true / false)
			},
			{
				answer_text: "Silver", //text
				answer: true, //correct or not (true / false)
			},
			{
				answer_text:"Tin", //text
				answer: false, //correct or not (true / false)
			},
			{
				answer_text:"Lead", //text
				answer: true, //correct or not (true / false)
			},
			{
				answer_text:"Pewter", //text
				answer: true, //correct or not (true / false)
			},
			{
				answer_text:"Brass", //text
				answer: false, //correct or not (true / false)
			},
			{
				answer_text:"Zinc", //text
				answer: false, //correct or not (true / false)
			}
		], 
		maxSelect:3 //the maximum amount of checkboxes they can select
	},
	{
		type: 4,
		question: ["Select the sentance that describes blow moulding", ""], //["QUESTION TEXT, "STYLES"]
		possible_answers: [ //amount of options in dropdown
			{
				answer_text:"1.  This is just a test", //text
				answer: false, //correct or not (true / false)
			},
			{
				answer_text: "2.  Once upon a time", //text
				answer: true, //correct or not (true / false)
			},
			{
				answer_text:"3.  How many people does it take to change a lightbulb?", //text
				answer: false, //correct or not (true / false)
			}
		]
	},
	{
		type: 5,
		question: ["Which of these is NOT a capital city?","" ,""], //["QUESTION TEXT, "STYLES"]
		possible_answers: [ //all radio buttons
			{
				answer_text: "media/quiz/choiceA.jpg",  //question
				answer: false, //correct or not (true / false)
			},
			{
				answer_text:"media/quiz/choiceB.jpg", //question
				answer: false, //correct or not (true / false)
			},
			{
				answer_text:"media/quiz/choiceC.jpg", //question
				answer: true, //correct or not (true / false)
			},
			{
				answer_text:"media/quiz/choiceD.jpg", //question
				answer: false, //correct or not (true / false)
			}
		]
	},
	{
		type: 6,
		question: ["Please select both European cities", ""], //["QUESTION TEXT, "STYLES"]
		possible_answers: [ //all checkboxes buttons
			{
				answer_text:"media/quiz/choiceA.jpg", //text
				answer: true, //correct or not (true / false)
			},
			{
				answer_text: "media/quiz/choiceB.jpg", //text
				answer: true, //correct or not (true / false)
			},
			{
				answer_text:"media/quiz/choiceC.jpg", //text
				answer: false, //correct or not (true / false)
			},
			{
				answer_text:"media/quiz/choiceD.jpg", //text
				answer: false, //correct or not (true / false)
			}
		], 
		maxSelect:2 //the maximum amount of checkboxes they can select
	},
]