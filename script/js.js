
$(document).ready(function(){
    $(".nav .down .menu").on("click",function(){
        $(".nav .down .menu-info").slideToggle(1000)
    })

    $(window).on("resize",function(){
        if ($(window).width()>=1000){
            $(".nav .down .menu-info").slideUp(0)
        }
    })


    $(document).ready(function(){
        $("[placeholder]").each(function(){
            var placeholderValue = $(this).attr("placeholder");
            $(this).focus(function(){
                $(this).attr("placeholder"," ");
            }).blur(function(){
                $(this).attr("placeholder",placeholderValue);
            })
        })
        
    });
})

    
