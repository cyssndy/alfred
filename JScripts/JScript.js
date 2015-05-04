
do{
	var bgnum = Math.floor((Math.random() * 100) + 1);
}
while(bgnum > 18);


$(document).ready(function(){
	
	/*
	var home = true;
	var project = false;(
	var resume = false;
	var entre = false;
	var activeBox = ".cont-home-box";
	*/

// start animation //
	$(".the-site").css({marginTop: '-50px'});
	$(".nav-col").css({opacity: '0'});
	$(".cont-home-box").css({opacity: '0'});	
	$(".the-site").delay(350).animate({marginTop: '0'}, 1000);
	$(".nav-col").delay(350).animate({opacity: '1'}, 1000);
	$(".cont-home-box").delay(350).animate({opacity: '1'}, 1000);
	

	$("#back-ground").css("background-image", 'url(/bg/' + bgnum + '.JPG)');
	$("#back-ground").animate({opacity: '0.2'},1000);

	
//-----------------//

	$(".cont-home-box").addClass("acting");
	
	$(".cont-project-box").width('0');
	$(".cont-resume-box").width('0');
	$(".cont-company-box").width('0');
	
	$("#langu").click(function(){
		if ($("#langu").hasClass("chinese")){
				$("#home").text("Home");
				$("#project").text("Project");
				$("#resume").text("Resume");
				$("#entre").text("Entrepreneurship");
				$("#langu").removeClass("chinese");
		}
		
		else{
				$("#home").text("首页");
				$("#project").text("项目");
				$("#resume").text("简历");
				$("#entre").text("创业");
				$("#langu").addClass("chinese");
		}
		
	});

	$(".nav-link").hover(
		function(){
			$(this).animate({marginLeft: '+=10'}, 100);
		},
		function(){
			$(this).animate({marginLeft: '-=10'}, 100);
		}
	);
	
	
	$(".project-box").hover(
		function(){
			$(this).animate({paddingLeft: '+=3%'}, 100);
		},
		function(){
			$(this).animate({paddingLeft: '-=3%'}, 100);
		}
	);

	var delayt = 600;

	$(".nav-link").click(function(){
		var panel;
		if ($(this).attr('id') == "home"){panel = ".cont-home-box";}
		if ($(this).attr('id') == "project"){panel = ".cont-project-box";}
		if ($(this).attr('id') == "resume"){panel = ".cont-resume-box";}
		if ($(this).attr('id') == "entre"){panel = ".cont-company-box";}
		
		
		if (!($(panel).hasClass("acting"))){
		
			$(panel).width('100%');
			$(".box-common").animate({
				opacity:'0',
				marginLeft: '0'},{
				queue: false,
				duration: delayt,
				complete: function(){
					$("div").find(".acting").width('0'),
					$("div").find(".acting").removeClass("acting"),
					$(panel).addClass("acting"),
					$(panel).width('100%')
				}
			});
			
			
			$(panel).animate({
				opacity: '1',
				marginLeft:'5%'},{
				queue: false,
				duration: delayt
			});

		}

	});
	
	/*
	
	$("#home").click(function(){
		if (!home){
			$(".cont-home-box").width('100%');
			$(".box-common").animate({
				opacity:'0',
				marginLeft: '0'},{
				queue: false,
				duration: delayt,
				complete: function(){
					$(activeBox).width('0'),
					activeBox = ".cont-home-box",
					$(activeBox).width('100%')
				}
			});
			
			
			$(".cont-home-box").animate({
				opacity: '1',
				marginLeft:'5%'},{
				queue: false,
				duration: delayt
			});
			
			home = true;
			project = false;
			resume = false;
			entre = false;
			
		}
	});
	
	
	$("#project").click(function(){
		if (!project){
			$(".cont-project-box").width('100%');
			$(".box-common").animate({
				opacity:'0',
				marginLeft: '0'},{
				queue: false,
				duration: delayt,
				complete: function(){
					$(activeBox).width('0')
					activeBox = ".cont-project-box",
					$(activeBox).width('100%')
				}
			});
			
			$(".cont-project-box").animate({
				opacity: '1',
				marginLeft:'5%'},{
				queue: false,
				duration: delayt
			});
			
			home = false;
			project = true;
			resume = false;
			entre = false;
			
		}
	});
	
	
	$("#resume").click(function(){
		if (!resume){
			$(".cont-resume-box").width('100%');
			$(".box-common").animate({
				opacity:'0',
				marginLeft: '0'},{
				queue: false,
				duration: delayt,
				complete: function(){
					$(activeBox).width('0'),
					activeBox = ".cont-resume-box",
					$(activeBox).width('100%')
				}
			});
			
			$(".cont-resume-box").animate({
				opacity: '1',
				marginLeft:'5%'},{
				queue: false,
				duration: delayt
			});
			
			home = false;
			project = false;
			resume = true;
			entre = false;
		}
	});
	
	$("#entre").click(function(){
		if (!entre){
			$(".cont-company-box").width('100%');
			$(".box-common").animate({
				opacity:'0',
				marginLeft: '0'},{
				queue: false,
				duration: delayt,
				complete: function(){
					$(activeBox).width('0'),
					activeBox = ".cont-company-box",
					$(activeBox).width('100%')
				}
			});
			
			$(".cont-company-box").animate({
				opacity: '1',
				marginLeft:'5%'},{
				queue: false,
				duration: delayt
			});
			
			home = false;
			project = false;
			resume = false;
			entre = true;
		}
	});
	
	*/

});
