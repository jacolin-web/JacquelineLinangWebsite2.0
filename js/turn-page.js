$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
        $('.isa').css('display', 'block');
    } else {
        $('.tatlo').css('display', 'none');
    }
});

if($('div').('#isa').show() && $('div').('#dalawa').show())
{
	$('div').('#tatlo').hide();
}