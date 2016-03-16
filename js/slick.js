$(document).ready(function(){
var w = window.innerWidth;

	if(w < 500)
	{
		$('.row').slick({
		  infinite: true,
		  dragability: true,
		  rows: 1,
		  slidesToShow: 1,
		});

	}

	else
	$('.row').slick({
	  infinite: true,
	  dragability: true,
	  rows: 1,
	  slidesToShow: 2,
	});
});