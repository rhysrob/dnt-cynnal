window.resourceScore = 0;

 /* For Scoring System */
 
	function showScore(total, totalCorrect, resource){
		$(resource).find('.score').each(function(){
			$(this).children('.actualScore').append(totalCorrect+" / "+total);
			$(this).show();
			$('html,body').animate({
				scrollTop: $(this).offset().top
			});
		});
		
	}
 
	function markQuestion(questionID, dataType, dataTotal){	
		
		var multiLoop = 0; 
		var multiLoopTotal = 0;
		var radioLoop = 0;
		var radioLoopTotal = 0;
		var textLoop = 0;
		var textLoopTotal = 0;
		var selectLoop = 0;
		var selectLoopTotal = 0; 

		if(dataType == 'radio'){
		
			$('.question[data-id="'+questionID+'"]').find('input:checked').each(function(){
				if($(this).attr('data-correct')=='true' && !$('.question[data-id="'+questionID+'"]').hasClass('marked')){
					radioLoop++;
				}
				if(radioLoop==dataTotal && !$('.question[data-id="'+questionID+'"]').hasClass('marked')){
					$('.question[data-id="'+questionID+'"]').removeClass('markedWrong').addClass('marked');
					$('.question[data-id="'+questionID+'"]').find('.completeBtn').hide();
				}
				else if($('.question[data-id="'+questionID+'"]').hasClass('marked')){
				
				}else{
					$('.question[data-id="'+questionID+'"]').removeClass('marked').addClass('markedWrong');
					radioLoop=0;
					$('.question[data-id="'+questionID+'"]').find('.completeBtn').hide();
					if(radioLoop == 1){
						radioLoop = 0;
					}
				}			
			});		
		}
		
		if(dataType == 'multiChoice'){
			$('.question[data-id="'+questionID+'"]').find('input:checked').each(function(){			
				if($(this).attr('data-correct')=='true' && !$('.question[data-id="'+questionID+'"]').hasClass('marked')){
					multiLoop++;					
				}
				if(multiLoop==dataTotal && !$('.question[data-id="'+questionID+'"]').hasClass('marked')){
					console.log('test');
					$('.question[data-id="'+questionID+'"]').removeClass('markedWrong').addClass('marked');
					$('.question[data-id="'+questionID+'"]').find('.completeBtn').hide();
				}else{
					$('.question[data-id="'+questionID+'"]').removeClass('marked').addClass('markedWrong');					
					$('.question[data-id="'+questionID+'"]').find('.completeBtn').hide();
				}
			});
		}
	
		/* check Text */		
		if(dataType == 'text'){		
			$('.question[data-id="'+questionID+'"]').find('input[type=text]').each(function(){
				var userValue = $(this).val().toUpperCase();
				var correctValue = $(this).attr('data-answer').toUpperCase();
				var corrValueSplit = correctValue.split(',');
				if($.inArray(userValue, corrValueSplit) != -1 && !$('.question[data-id="'+questionID+'"]').hasClass('marked')){
					textLoop++;
					if(textLoop==dataTotal && !$('.question[data-id="'+questionID+'"]').hasClass('marked')){
						$('.question[data-id="'+questionID+'"]').removeClass('markedWrong').addClass('marked');
						$('.question[data-id="'+questionID+'"]').find('.completeBtn').hide();
					}
				}
				else{
					$('.question[data-id="'+questionID+'"]').removeClass('marked').addClass('markedWrong');
					textLoop=0;
					$('.question[data-id="'+questionID+'"]').find('.completeBtn').hide();
					if(textLoopTotal == 1){
						textLoopTotal = 0;
					}
				}
			});		
		}
		
		if(dataType == 'select'){		
			$('.question[data-id="'+questionID+'"]').find('select').each(function(){	
				if($(this).val()=='true' && !$('.question[data-id="'+questionID+'"]').hasClass('marked')){
					selectLoop++;					
				}
				if(selectLoop==dataTotal && !$('.question[data-id="'+questionID+'"]').hasClass('marked')){
					console.log('test');
					$('.question[data-id="'+questionID+'"]').removeClass('markedWrong').addClass('marked');
					$('.question[data-id="'+questionID+'"]').find('.completeBtn').hide();
				}else{
					$('.question[data-id="'+questionID+'"]').removeClass('marked').addClass('markedWrong');					
					$('.question[data-id="'+questionID+'"]').find('.completeBtn').hide();
				}
			});
		}
		
		
		
		var totalDivs = $('.question').length;
		var totalMarked = $('.marked, .markedWrong').length;
		var totalCorrect = $('.marked').length;
		var totalWrong = $('.markedWrong').length;
		console.log('total = '+totalDivs+" / totalMarked = "+totalMarked);
		if(totalDivs == totalMarked){
			
			showScore(totalDivs, totalCorrect);
		}
		
		
		/*
		totalMarked = $( "div[data-id='"+resourceID+"']" ).find('.marked, .markedWrong').length;
		if(window.totalQuestions == totalMarked)
			{
				var totalCorrect =  $( "div[data-id='"+resourceID+"']" ).find('.marked').length;
				var div = "div[data-id='"+resourceID+"']";
				showScore(window.totalQuestions, totalCorrect, div);
				$( "div[data-id='"+resourceID+"']" ).find('.markedWrong').each(function(){
					$(this).addClass('wrong');
				});
				$( "div[data-id='"+resourceID+"']" ).find('.marked').each(function(){
					$(this).addClass('markedRight');
				});
				$( "div[data-id='"+resourceID+"']" ).find('.marked1').each(function(){
					$(this).addClass('markedRight1');
				});
				$( "div[data-id='"+resourceID+"']" ).find('.markedWrong1').each(function(){
					$(this).addClass('wrong1');
				});
			} */
		
	}
