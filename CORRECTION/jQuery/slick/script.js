 
$(document).ready(function() {
     
    $(function(){$("#vid2").css("color","green");}); 
    
    $("#Css").click(function(){$("#vid2").css("color","blue");});

    $("#Html").click(function(){
        $("#vid2").text("Hello World! ✈")
        $("#vid2").css("font-style","italic");
    });
      
    $("#Toggle").click(function(){$("#vid2").toggle(2000);});

    $("#Slide").click(function(){$("#vid2").slideToggle(4000);});

   });
   
 