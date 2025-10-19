$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});
$('document').ready(function(){
        var vw;
        $(window).resize(function(){
            vw = $(window).width()/2;
            $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
            
            // Repositioning to center the four ASMI balloons on resize
            // The four balloons are: #b33 (A), #b44 (S), #b55 (M), #b66 (I).
            // Width of 4 balloons (100px each) = 400px. Centering starts at vw - 200.
            
            // These old IDs are positioned off-screen or ignored
          
            // Center the four balloons (A, S, M, I)
            $('#b33').animate({top:240, left: vw - 200},500); // 'A'
            $('#b44').animate({top:240, left: vw - 100},500); // 'S'
            $('#b55').animate({top:240, left: vw + 0},500);   // 'M'
            $('#b66').animate({top:240, left: vw + 100},500); // 'I'
        });

    $('#turn_on').click(function(){
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#play').fadeIn('slow');
        });
    });
    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('backgroud-color','#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');
        });
    });

   $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#balloons_flying').fadeIn('slow');
        });
    }); // This must be closed correctly

    
    
    function loopThree() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b3').animate({left:randleft,bottom:randtop},10000,function(){
            loopThree();
        });
    }
    function loopFour() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b4').animate({left:randleft,bottom:randtop},10000,function(){
            loopFour();
        });
    }
    function loopFive() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b5').animate({left:randleft,bottom:randtop},10000,function(){
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b6').animate({left:randleft,bottom:randtop},10000,function(){
            loopSix();
        });
    }
   
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500},8000);
        // Note: The classes are still applied to the original balloon IDs
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        
        // Only loop the existing balloons (b3, b4, b5, b6)
        // You might want to remove loopOne, loopTwo, loopSeven if b1, b2, b7 don't exist
        // or ensure they start off-screen in your CSS/HTML if they don't exist in HTML.
        
        loopThree();
        loopFour();
        loopFive();
        loopSix();
       
        
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#cake_fadein').fadeIn('slow');
        });
    }); 

    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function(){
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function(){
            $('#wish_message').fadeIn('slow');
        });
    });

        
    $('#wish_message').click(function(){
        vw = $(window).width()/2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        
        // Map the existing balloons to the new IDs
        $('#b1').attr('id','b11'); // This balloon doesn't exist in the HTML now, but keeping mapping for consistency
        $('#b2').attr('id','b22')  // This balloon doesn't exist in the HTML now
        $('#b3').attr('id','b33')  // A
        $('#b4').attr('id','b44')  // S
        $('#b5').attr('id','b55')  // M
        $('#b6').attr('id','b66')  // I
        $('#b7').attr('id','b77')  // This balloon doesn't exist in the HTML now

        // Position all balloons, with off-screen positions for the removed ones
        $('#b11').animate({top:-500, left: vw-350},500);
        $('#b22').animate({top:-500, left: vw-250},500);
        $('#b77').animate({top:-500, left: vw+250},500);

        // **UPDATED POSITIONING FOR CENTERING "ASMI"**
        $('#b33').animate({top:240, left: vw - 200},500); // 'A'
        $('#b44').animate({top:240, left: vw - 100},500); // 'S'
        $('#b55').animate({top:240, left: vw + 0},500);   // 'M'
        $('#b66').animate({top:240, left: vw + 100},500); // 'I'


        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#story').fadeIn('slow');
        });
    });
    
    $('#story').click(function(){
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function(){
            $('.message').fadeIn('slow');
			$('#my_photo').delay(500).fadeIn('slow');
        });
        
        var i;

        function msgLoop (i) {
            $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
            i=i+1;
            $("p:nth-child("+i+")").fadeIn('slow').delay(1000);
            if(i==50){
                $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
                    $('.cake').fadeIn('fast');
                });
                
            }
            else{
                msgLoop(i);
            }           

        });
            // body...
        }
        
        msgLoop(0);
        
    });
});



//alert('hello');

