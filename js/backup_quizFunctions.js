function loadTextQuestion(quiz, qNumber){
	var questionNumber = "<h2 class='qNumber'><span>Q</span>"+qNumber+"</h2>";
	
	var question = "<div class='qText' style='"+quiz['question'][1]+"'><p>"+quiz['question'][0]+"</p></div>";
	
	var answer = "<div class='qAnswer'";
	if(quiz['answer_style']){
		answer += "style='"+quiz['answer_style']+"'";
	}
	answer += "><input type='text' data-type='text' data-answer='"+quiz['possible_answers']+"' /></div>";
	
	var button = "<div class='completeBtn' data-type='text' data-total='1' data-qID='"+qNumber+"'><span>Ready?</span></div>";
	
	var html = "<div class='question' data-id='"+qNumber+"'>"+questionNumber+question+answer+button+"</div>";
	
	$('#quiz').append(html);
	
}

function loadRadioQuestion(quiz, qNumber){
	var questionNumber = "<h2 class='qNumber'><span>Q</span>"+qNumber+"</h2>";
	
	var question = "<div class='qText' style='"+quiz['question'][1]+"'><p>"+quiz['question'][0]+"</p></div>";
	
	var answer = "<div class='qAnswer'";
	if(quiz['answer_style']){
		answer += "style='"+quiz['answer_style']+"'";
	}else{
		answer += ">";
	}
	answer += "<table class='radioAnswers'>";
	var i = 0; 
	var trueAns = 0;
	$.each(quiz['possible_answers'], function(a, ans){
		i++;
		if(ans['answer']){
			trueAns++;
		}
		answer += "<tr> \
			<td> \
				<input type='radio' name='q"+qNumber+"' value='"+i+"' data-correct='"+ans['answer']+"' id='radio_q"+qNumber+"_r"+i+"'><label for='radio_q"+qNumber+"_r"+i+"'><span></span></label> \
			</td> \
			<td> \
				<span>"+ans['answer_text']+"</span> \
			</td> \
		</tr>";
				
		
	});
	
	answer += "</table></div>"
	
	
	var button = "<div class='completeBtn' data-type='radio' data-total='"+trueAns+"' data-qID='"+qNumber+"'><span>Ready?</span></div>";
	
	var html = "<div class='question' data-id='"+qNumber+"'>"+questionNumber+question+answer+button+"</div>";
	
	$('#quiz').append(html);
}

function loadMultiQuestion(quiz, qNumber){
	var questionNumber = "<h2 class='qNumber'><span>Q</span>"+qNumber+"</h2>";
	
	var question = "<div class='qText' style='"+quiz['question'][1]+"'><p>"+quiz['question'][0]+"</p></div>";
	
	var answer = "<div class='qAnswer' data-max='"+quiz['maxSelect']+"'";
	if(quiz['answer_style']){
		answer += "style='"+quiz['answer_style']+"'";
	}else{
		answer += ">";
	}
	answer += "<table class='checkAnswers'>";
	var i = 0; 
	var trueAns = 0;
	$.each(quiz['possible_answers'], function(a, ans){
		i++;
		if(ans['answer']){
			trueAns++;
		}
		answer += "<tr> \
			<td> \
				<input type='checkbox' name='q"+qNumber+"' value='"+i+"' data-correct='"+ans['answer']+"' id='check_q"+qNumber+"_r"+i+"'><label for='check_q"+qNumber+"_r"+i+"'><span></span></label> \
			</td> \
			<td> \
				<span>"+ans['answer_text']+"</span> \
			</td> \
		</tr>";
				
		
	});
	
	answer += "</table></div>"
	
	
	var button = "<div class='completeBtn' data-type='multiChoice' data-total='"+trueAns+"' data-qID='"+qNumber+"'><span>Ready?</span></div>";
	
	var html = "<div class='question' data-id='"+qNumber+"'>"+questionNumber+question+answer+button+"</div>";
	
	$('#quiz').append(html);
}

function loadDropDownQuestion(quiz, qNumber){
	var questionNumber = "<h2 class='qNumber'><span>Q</span>"+qNumber+"</h2>";
	
	var question = "<div class='qText' style='"+quiz['question'][1]+"'><p>"+quiz['question'][0]+"</p></div>";
	
	
	var answer = "<div class='qAnswer'";
	if(quiz['answer_style']){
		answer += "style='"+quiz['answer_style']+"'";
	}
	answer += "><select data-type='select'>";
	var i = 0;
	$.each(quiz['possible_answers'], function(a, ans){
		i++;
		answer += "<option value='"+ans['answer']+"' data-correct='"+ans['answer']+"'>"+ans['answer_text']+"</option>";
				
		
	});
	
	answer += "</select></div>";
	
	var button = "<div class='completeBtn' data-type='select' data-total='1' data-qID='"+qNumber+"'><span>Ready?</span></div>";
	
	var html = "<div class='question' data-id='"+qNumber+"'>"+questionNumber+question+answer+button+"</div>";
	
	$('#quiz').append(html);
}

function loadQuiz(quiz){
	var i = 0;
	$.each(quiz, function(qz, quiz){
		i++;
		switch(quiz['type']){
			case 1:
				loadTextQuestion(quiz, i);
				break;
			case 2:
				loadRadioQuestion(quiz, i);
				break;
			case 3:
				loadMultiQuestion(quiz, i);
				break;
			case 4:
				loadDropDownQuestion(quiz, i);
		}
	});
}

function highlightAnswers(){
	$('.marked').addClass('correct');
	$('.markedWrong').addClass('wrong');
}

function removeHighlight(){
	$('.correct').removeClass('correct');
	$('.wrong').removeClass('wrong');
}

function showScore(totalQs, correct){
	console.log("show score: "+$('#theScore').length);
	if($('#theScore').length <= 0){
		var html = "<div id='theScore'> \
			<div id='scoreWrapper'> \
				<p id='scoreText'>"+correct+" / " +totalQs+ "</p> \
				<p class='restartBtn'> \
					<span>Restart</span> \
				</p> \
			</div>";
		$('#quiz').append(html);
	}else{
		$('#scoreText').html(correct+" / " +totalQs);
		$('#theScore').show();
	}
	
	highlightAnswers();
	var lang = checkLang();
	changeLang(lang);
}

function hideScore(){
	$('#theScore').hide();
}

function resetQuiz(){
	$('div').removeClass('marked').removeClass('markedWrong').removeClass('correct').removeClass('wrong');
	$("input").each(function(){
		$(this).val('');
		$(this).removeAttr('checked');
		this.checked = false;
	});
	$('.completeBtn').show();
	hideScore();
}
$(document).ready(function(){

	$('input[type=checkbox]').on('change', function(evt) {	
		var limit = $(this).parents('.question').find('.qAnswer').attr('data-max');
		if($(this).parents('.question').find(':checked').length > limit) {
			this.checked = false;
		}
		$(this).parents('.question').find('.completeBtn').each(function(){
				$(this).show();
				$(this).parents('.question').removeClass('marked').removeClass('markedWrong').removeClass('correct').removeClass('wrong');
			
		});
		hideScore();
		
	});
	
	
	$('input[type=text]').on('focus', function(evt) {	
		$(this).parents('.question').find('.completeBtn').each(function(){
				$(this).show();
				$(this).parents('.question').removeClass('marked').removeClass('markedWrong').removeClass('correct').removeClass('wrong');
			
		});
		
		hideScore();
		
	});
	
	$('body').on('click','.completeBtn', function(evt) {	
		// data-type='text' data-total='1' data-qID
	
		var dataType = $(this).attr('data-type');
		var dataTotal = $(this).attr('data-total');
		var questionID = $(this).attr('data-qID');
		markQuestion(questionID, dataType, dataTotal);
	});

	$('input[type=radio]').on('change', function(evt) {	
	var limit = $(this).parents('.question').find('.completeBtn').attr('data-total');
	 console.log($(this).siblings(':checked').length);
		if($(this).siblings(':checked').length >= limit) {
			this.checked = false;
		}
		$(this).parents('.question').find('.completeBtn').each(function(){
				$(this).show();
				$(this).parents('.question').removeClass('marked').removeClass('markedWrong').removeClass('correct').removeClass('wrong');
		});
		hideScore();
		
	});
	
	$('body').on('click','.restartBtn', function(){
		resetQuiz();
	});
});


