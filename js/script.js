//ÌÅíþ
$(function(){
	$('.level_more').hide();
	    $menu = $('.level_1');
			$menu.on('click', function(event) {
				$('.level2').show();
				$('.level3').hide();
				$('.level4').hide();				
				$('.level5').hide();
			    event.preventDefault();
				$menu.not(this).parent('li').children('.level_more').slideUp(0);
				$menu.not(this).removeClass('active');
		    	$(this).parent('li').children('.level_more').slideToggle(0);
				$(this).toggleClass('active');
    });
});


$(function(){
	    $menuLVL = $('.m_btn');
			$menuLVL.on('click', function(event) {
				event.preventDefault();
				var thisATR = $(this).attr('data-item');
				var EL = $(this).parents('.level_more').children('.'+thisATR);
				$('.level_more > div').hide();
				$(EL).show();
    });
});


$(function(){
	    $menuMAIN = $('.m_main');
			$menuMAIN.on('click', function(event) {
				event.preventDefault();
				$('.level_more').hide();
				$('.level2').hide();
				$('.level3').hide();
				$('.level4').hide();				
				$('.level5').hide();
    });
});




$(function(){
	    $menuAda = $('.menu_button');
			$menuAda.on('click', function(event) {
				$('.level_1').removeClass('active');
				$('.level_more').hide();
				$('.level2').hide();
				$('.level3').hide();
				$('.level4').hide();				
				$('.level5').hide();
			    event.preventDefault();
				$menuAda.not(this).next('.menu').slideUp(0);
				$menuAda.not(this).removeClass('active');
		    	$(this).next('.menu').slideToggle(0);
				$(this).toggleClass('active');
    });
});





$(function(){
	var winWidth;
	winWidth = $(document).width();
	if(winWidth < 481)
	{
		$(".block_photo").each(function() {
			var t_photo = $(this).children('.photo');
			$(this).children('.photo').remove();
			$(this).prepend( t_photo);
		});
	}
});
















//Ïëàâóþùåå ìåíþ. áëîê
$(function(){
    var elem = $('#left_nav');
    var size = $(document).width();
	var top = $(this).scrollTop();
	var myTop = 112;

	if(size > 767) elem.css('position', 'fixed');
	else elem.css('position', 'relative');

	 
	if($(document).width() > 767) myTop = 112;
	else myTop = 0;
    if(top > myTop) elem.css('top', 0);
    $(window).scroll(function(){
        top = $(this).scrollTop();
        if (top < myTop) elem.css('top', (myTop-top));
        else elem.css('top', 0);
    });
});



//Ïëàâóþùèé áëîê õàðàêòåðèñòèê
$(function(){
	if ($("#floating_block").length) {
		var objToStick = $("#floating_block"); //Ïîëó÷àåì íóæíûé îáúåêò
	    var topOfObjToStick = $(objToStick).offset().top; //Ïîëó÷àåì íà÷àëüíîå ðàñïîëîæåíèå íàøåãî áëîêà
    	var WidthobjToStick = $(objToStick).innerWidth();
	
    	$(window).scroll(function () {
        	var windowScroll = $(window).scrollTop(); //Ïîëó÷àåì âåëè÷èíó, ïîêàçûâàþùóþ íà ñêîëüêî ïðîêðó÷åíî îêíî
        		if (windowScroll > topOfObjToStick) { // Åñëè ïðîêðóòèëè áîëüøå, ÷åì ðàññòîÿíèå äî áëîêà, òî ïðèêëåèâàåì åãî
            		$(objToStick).addClass("fixedBlock");
					$(".fixedBlock").css('width', WidthobjToStick + 'px');
		        } else {
        		    $(objToStick).removeClass("fixedBlock");
        		};
    	});	
	};

});















jQuery(function(){
	jQuery('.sliderGo').camera({
		alignment: "topCenter", 
		autoAdvance: true,
		mobileAutoAdvance: true,
		easing: "swing",
		mobileEasing: "swing",
		fx: "simpleFade",	
		mobileFx: "simpleFade",
		
		height: "626px",
		minHeight: "550px",
		
		hover: true,
		loader: "none",
		loaderColor: "#eeeeee", 
		loaderBgColor: "#ffffff", 
		loaderOpacity: .8,
		loaderPadding: 0,
		loaderStroke: 7,	

		navigation: false,
		navigationHover: true,
		mobileNavHover: true,
		opacityOnGrid: false,
		overlayer: true,
		pagination: true,
		playPause: false,
		pauseOnClick: false,
		pieDiameter: 38,
		piePosition: "rightTop",
		portrait: false,
		thumbnails: false,
		time: 7000,
		transPeriod: 1500
	});
});






// Tabs
//(function($) {
//$(function() {
//
//	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
//		$(this)
//			.addClass('active').siblings().removeClass('active')
//			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
//	});
//
//	var tabIndex = window.location.hash.replace('#tab','')-1;
//	if (tabIndex != -1) $('ul.tabs__caption li').eq(tabIndex).click();
//
//	$('a[href*=#tab]').click(function() {
//		var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '')-1;
//		$('ul.tabs__caption li').eq(tabIndex).click();
//	});
//
//});
//})(jQuery);




$(document).ready(function() {
	jQuery('input[placeholder], textarea[placeholder]').placeholder();

	$("select").chosen({
		disable_search: true,
    	width: "100%",
	});





	$(".slider_error").owlCarousel({
		loop:true,
		autoplay: false,
    	margin: 0,
	    nav: false,
  	    items:1
	});




	$(".slider_sertificat").owlCarousel({
		loop:true,
		autoplay: false,
    	margin: 0,
		dots: false, 
		nav: true,
		responsive:{
    	    0:{ items:1 },
	        600:{ items:3 }
	    }
	});



	$(".slider_dop_service").owlCarousel({
		loop:true,
		autoplay: false,
    	margin: 0,
		dots: false, 
		nav: true,
		responsive:{
    	    0:{ items:1 },
			600:{ items: 2 },
	        720:{ items:3 }
	    }
	});


/*Новые вызовы START*/


	$(".slider_action").owlCarousel({
		touchDrag: false,
		mouseDrag: false,
		autoplay: false,
		margin: 0,
		nav: false,
		items:1,
		singleItem: true
	});

	$(".slider_rew").owlCarousel({
		touchDrag: false,
		mouseDrag: false,
		autoplay: false,
		margin: 0,
		nav: false,
		items:1,
		singleItem: true
	});

/*Новые вызовы END*/


	$(".faq_open").click(function(){
		var t = $(this).parent().next('.view');
		t.slideToggle(700);
    });


	$(".more_params_filter").click(function(){
		$('.dop_parameters_filter').slideToggle(700);
		$(".more_params_filter").hide();

    });




	$(".foto_big").fancybox({
		openEffect: 'elastic',
    	closeEffect: 'elastic',
		helpers : {
			title: {type: 'over'}
	  	},
		prevEffect: 'fade',
		nextEffect: 'fade',
		margin: [0, 0, 0, 10], 
		padding: [92, 17, 84, 17],
		width: 'auto',
		height: 'auto',
		afterLoad: function() {
			this.title = this.title + '<p>' + $(this.element).attr('caption') + '</p>';
			$('.fancybox-wrap').append('<div class="sum_foto">' + $(this.element).attr('date-item') + '</div>');
    	}
	});


	$('.close_popup').bind('click', function(){
		$('#mask').fadeOut(300);
		$('.add_to_basket').hide(200);
		$('.add_to_oneclik').hide(200);	
	});


	$('.add_basket').bind('click', function(){
		$('#mask').fadeIn(300);
		$('.add_to_basket').fadeIn(300);
	});	

	$('.add_basket_one').bind('click', function(){
		$('#mask').fadeIn(300);
		$('.add_to_oneclik').fadeIn(300);
	});	



	$('.search_button').bind('click', function(){
		$('.search_wrap').slideToggle(200);
	});

	$('.phone_btn').bind('click', function(){
		$('.phone_wrap').slideToggle(200);
	});


	$(".open_next").click(function(){
		$(this).next('.next_hide').slideToggle(200);
    });


	$(".goods_params .block .name").click(function(){
		$(this).next('.info').slideToggle(200);
    });








});

