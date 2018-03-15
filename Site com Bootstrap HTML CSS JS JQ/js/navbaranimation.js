$('#collapse-navbar').on('show.bs.collapse', function(){
	$('.topAndreVieira-banner').css('transform', 'translate(-50%, 25%')
});

$('#collapse-navbar').on('hide.bs.collapse', function(){
	$('.topAndreVieira-banner').css('transform', 'translate(-50%, -50%')
});

$(document).ready(function(){
      $('body').append('<div id="toTop" class="btn btn-info"><span class="glyphicon glyphicon-chevron-up"></span> Voltar ao Top</div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
