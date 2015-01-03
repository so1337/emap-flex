$(document).ready(function() {
    $(".menuhd").on({
    	mouseenter:function(){

    		$(this).stop().animate({
    			"height":"90px"
    		})
    	},
    	mouseleave:function(){
    		$(this).stop().animate({
    			"height":"127px"
    		})
    	},


    });
 
            $('.coaches a').on('mouseenter', function(){
        $('.cover', $(this)).animate({opacity:0.5}, 500);
        $('.cover-text', $(this)).animate({opacity:1}, 500);
    }).on('mouseleave', function(e){
        $('.cover, .cover-text', $(this)).animate({opacity:0}, 500);
    }); 
    
    $('.coaches a').on('mousedown', function(){
        $('.cover', $(this)).animate({opacity:0.3}, 100);
    }); 
 
});