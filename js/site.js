jQuery(function($){

/* lang */
	$('.langlist_title').on('click', function(){
		$('.langlist_ul').toggle();
	});
	
    $(document).on('click', function(event) {
        if ($(event.target).closest(".langlist_title, .langlist_ul").length) return;
		$('.langlist_ul').hide();
    });		
/* end lang */

	function top_menu(){
		var hei = 0;
		if($('#wpadminbar').length > 0){
			if($('#wpadminbar').css('position') == 'fixed'){
				hei = parseInt($('#wpadminbar').height());
			}
		}		
		if($('#fix_div').length > 0){
			var npos = $(window).scrollTop();
			var one = parseInt($('#fix_div').offset().top) - hei;
			var wid = $(window).width();
			if(wid >= 310){
				if(npos > one){
					$('#fix_elem').css({'position': 'fixed', 'top': hei});
				} else {
					$('#fix_elem').css({'position':'absolute', 'top': '0px'});
				}
			} else {
				$('#fix_elem').css({'position':'absolute', 'top': '0px'});
			}
		}
	}

	$(window).on('scroll', function(){
	    top_menu();
	});
	$(window).on('resize', function(){
		top_menu();
	});
	$(document).ready(function(){
		top_menu();
	});	

	$('.js_menu li').hover(function(){
	    $(this).find('ul:first').show('drop');
	}, function(){
	    $(this).find('ul:first').stop(true,true).hide();
	});	
	
	$('.js_menu li a').on('click', function(){
		var href = $(this).attr('href');
		if(href == '#'){
			return false;
		}
	});
	
	$('.sub-menu').append('<div class="ugmenu"></div>');

	var content_menu = $('.js_menu').html();
	$('.mobile_menu_ins').html(content_menu);
	
	$('.topmenu_ico').on('click', function(){
		$('.mobile_menu_abs, .mobile_menu').show();
	});
	$('.mobile_menu_close').on('click', function(){
		$('.mobile_menu_abs, .mobile_menu').hide();
	});
	
	$('table').each(function(){
	    $(this).find('th:first').addClass('th1');
		$(this).find('th:last').addClass('th2');
	    $(this).find('tr:last').find('td:first').addClass('td1');
		$(this).find('tr:last').find('td:last').addClass('td2');	
	});		
	
	$('a.home_reserv_more').on('click', function(){
		var title_no = $(this).attr('data-no');
		var title_yes = $(this).attr('data-yes');
		if($(this).hasClass('active')){
			$('.one_home_reserv.hide_item').hide();
			$(this).html(title_no);			
		} else {
			$('.one_home_reserv.hide_item').show();
			$(this).html(title_yes);
		}
		$(this).toggleClass('active');
		
		return false;
	});	
	
	$(document).JcheckboxInit();
	$(document).Jcheckbox();
	
	$(document).Jselect('init', {trigger: '.js_my_sel', class_ico: 'currency_logo'});
	
	$(document).AdaptiveTable({trigger : '.pntable table'});
});