var interval = null;
var flashImage = function(){
	if($("#btn-slideshow").hasClass('start')){
		$("#btn-slideshow")
			.removeClass("start")
			.text('슬라이드쇼 시작');
		clearInterval(interval);
	}else{
		$("#btn-slideshow")
			.attr('class','start')
			.text('슬라이드쇼 중지');
		interval = setInterval(function(){
				RandomImage();
		},1000);
	}
}

var RandomImage =function(){
	// 랜덤 변수 
	var result = Math.floor( Math.random() * _images.length);
	console.log(_images[result].split(":")[0]);
	console.log(_images[result].split(":")[1]);
	$('.image-viewer img')
		.attr({
				src:'/ch07/images/'+_images[result].split(":")[1],
				alt:_images[result].split(":")[0], // 새텝으로 뜨게하기.
				title:_images[result].split(":")[0] // 말풍선 뜨게하기.
			})
};
var _images = [ 
		"국화:Chrysanthemum.jpg", 
		"사막:Desert.jpg", 
		"수국:Hydrangeas.jpg", 
		"해파리:Jellyfish.jpg", 
		"코알라:Koala.jpg", 
		"등대:Lighthouse.jpg", 
		"펭귄:Penguins.jpg", 
		"툴립:Tulips.jpg" 
	];
	
var imageViewer = {
	init: function(){
	
		$("#btn-change").click(function(){
			RandomImage();
		});
		
		$("#btn-slideshow").click(function(){
			flashImage();
		});
	}

	
}