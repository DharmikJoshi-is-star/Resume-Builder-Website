
$(document).ready(function(){

	var email = $('#emailform');
	var signup = $('#signupform');
	var siteurl = $('#siteform');
	
	
	var login = $('#loginform');
	var recover = $('#recoverform');
	var speed = 400;

	$('#to-signup').click(function(){
		
		$('#emailform').hide();
		$('#signupform').slideUp();
		
	});
	
	$('#to-site').click(function(){
		
		siteurl.slideUp();
		signup.fadeIn();
		
	});
	
	$('#to-recover').click(function(){
		
		$("#loginform").slideUp();
		$("#recoverform").fadeIn();
	});
	$('#to-login').click(function(){
		
		$("#recoverform").hide();
		$("#loginform").fadeIn();
	});
	
	
	$('#to-login').click(function(){
	
	});
    
    if($.browser.msie == true && $.browser.version.slice(0,3) < 10) {
        $('input[placeholder]').each(function(){ 
       
        var input = $(this);       
       
        $(input).val(input.attr('placeholder'));
               
        $(input).focus(function(){
             if (input.val() == input.attr('placeholder')) {
                 input.val('');
             }
        });
       
        $(input).blur(function(){
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder'));
            }
        });
    });

        
        
    }
});