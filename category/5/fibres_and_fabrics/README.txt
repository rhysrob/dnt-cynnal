index.html
******************************

Breadcrumbs:
		Remember to change the content, and href of the breadcrumbs, as well as the data-cat and data-subcat (as this allows the popup menu, and sub mneu to be highlighted in the main menu if clicked). 


recordContent: 

		<h1> - the title
		<div> - insert all content in the first <div>

#media:

	.quizButton - for multiple quizes,  just duplicate the .quizButton div, and change the href's
	
	.video - upload mp4 to the the media directory here, and in the .video class, insert the path into the data-id attribute e.g data-id="media/video.mp4".  You can change the thumbnail imag if needed. 

	.gallery - provide a unique ID for the .gallery div, and choose a thumbnial.   In media.js,  ensure that the $().click function contains the ID of that gallery e.g. 
	$("#gallery").click(function() { 
		....
	});

	for multiple galleries,  just duplicate the html .gallery, change the ID,  and duplicate the js.click(function() and change the selector ID. 

	upload images into the media folder, and in the media.js, ensure that the href for each gallery item contains the path to the image. e,g:		

			'href':'media/image.jpg'

----------------------

quiz.html
	
	to create a quiz, open questions.js, here there is a an array containing the questions.  
	to create a second quiz, duplicate the js here, and change the variable name = e.g var quiz2 = [{...}];
	
	at the bottom of quiz.html there is a function you'll need to pass the quiz variable from questions.js e.g. 
	
	loadQuiz(quiz2);
	