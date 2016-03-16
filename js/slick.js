$(document).ready(function(){
var w = window.innerWidth;

	if(w < 500)
	{
		$('.row').slick({
		  arrows: true,
		  infinite: true,
		  dragability: true,
		  swipe: true,
		  rows: 1,
		  slidesToShow: 1,
		});

	}

	else
	$('.row').slick({
		dots: false,
		arrows: true,
	  infinite: true,
	  dragability: true,
	  swipe: true,
	  rows: 1,
	  slidesToShow: 2,
	});
});