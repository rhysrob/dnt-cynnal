function showCategoryBox(category, subCat){
	
	$('#'+category).slideDown();
	if(subCat){
		$('#'+subCat).addClass('active');
	}
	$("html, body").delay(100).animate({
		scrollTop: $('#'+category).offset().top - 100 
	}, 1000);
	setTimeout(function(){
		$('.closeButton').fadeIn();
		if(window.localStorage!==undefined){
			localStorage.removeItem("cat");
			localStorage.removeItem("subcat");
		}else{
			$.cookies.del('cat');
			$.cookies.del('subcat');
		}
	},600);	
	
}

function checkCategories(){
	
	if(window.localStorage!==undefined){
		
		var category = localStorage.getItem("cat");
		if(category){			
			var subCat = localStorage.getItem("subcat");
			if(subCat){
				showCategoryBox(category, subCat);				
			}
			else{
				showCategoryBox(category, false);
			}
		}
	}else{
		var category = $.cookies.get("cat");
		if(category){
			var subCat = $.cookies.get("subcat");
			if(subCat){
				showCategoryBox(category, subCat);
			}
			else{
				showCategoryBox(category, false);
			}
		}
	}
}

function showVideoOverlay(video){
	var html = "<div id='overlay'> \
					<div id='mediaPopupContent'> \
						<div id='theMediaContent'> \
							<video controls> \
								<source src='"+video+"' type='video/mp4'>\
							</video> \
							<img src='../../../img/close_icon_media.png' class='closePopMedia' /> \
						</div> \
					</div> \
				</div>";
	$('body').append(html);
}



$(document).ready(function(){

	
	//menu circle buttonsclosePopMedia
	$('body').on('click','.squareButton',function(){
		var popUpID = $(this).attr('data-id');
		$('.squareButton').removeClass('active');
		$(this).addClass('active');
		$('.popUpMenu').slideUp();
		$('#'+popUpID).slideDown();
		$("html, body").delay(100).animate({
			scrollTop: $('#'+popUpID).offset().top - 100 
		}, 1000);
		setTimeout(function(){
			$('.closeButton').fadeIn();
		},600);
	});
	
		
	$('body').on('click','a.cat',function(e){
		if(window.localStorage!==undefined){
			localStorage.setItem("cat", $(this).attr('data-cat'));
		}else{
			$.cookies.set("cat", $(this).attr('data-cat'));
		}
	});
	
	$('body').on('click','a.subcat',function(e){		
		if(window.localStorage!==undefined){
			localStorage.setItem("cat", $(this).attr('data-cat'));
			localStorage.setItem("subcat", $(this).attr('data-subcat'));
		}else{
			$.cookies.set("cat", $(this).attr('data-cat'));
			$.cookies.set("subcat", $(this).attr('data-subcat'));
		}
	
	});

	$('body').on('click','.lightbox',function(){
		var video = $(this).attr('data-id');
		showVideoOverlay(video);
	});
	
	$('body').on('click','.closePopMedia',function(){
		$('#overlay').remove();
	});
	
	//popup close button html5lightboxclosePopMedia
	$('body').on('click','.closeButton',function(){
		$('.popUpMenu').slideUp();
		$("html, body").delay(100).animate({
			scrollTop: $('#bodyWrapper').offset().top - 100 
		}, 800);
		$('.squareButton').removeClass('active');
		$('.closeButton').hide();
		if(window.localStorage!==undefined){
			localStorage.removeItem("cat");
			localStorage.removeItem("subcat");
		}else{
			$.cookies.del("cat");
			$.cookies.del("subcat");
		}
		$('.subCat').removeClass('active');
	});
	

	
	
	
	
	
	
});