$(document).ready(function(){
	
	var options = {
			'padding'			: 0,
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'type'              : 'image',
			'changeFade'        : 0
		};
	
	$("#gallery").click(function() {
		$.fancybox([
			{
				'href'	: 'media/thumb1.jpg',
				'title'	: "asfdasdf"
			},
			{
				'href'	: 'media/thumb2.jpg',
				'title'	: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
			}
		],options );
    });
	
	
	
});