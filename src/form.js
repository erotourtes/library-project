$(document).ready(()=>{
    $(".menu").slideUp();
    $(".form__group input").on("change", function(){
        $(".menu .button-74").first().on("click", ()=>{
            alert("I have not implemented it yet😥")
        });
        $(".menu .button-74").last().on("click", ()=>{
            window.isIdle = false;
            $(".menu").slideUp(50);
            setTimeout(()=>{
                $(".menu").css({"-webkit-transform":"translateY(-100%)", opacity: 0});
            }, 100);
            $(this).prop("value", "Томас Манн");
            $('html').css({
                overflow: 'auto',
                height: 'auto'
            });
        });
        window.isIdle = true;
        $(".menu").css({"-webkit-transform":"translateY(0%)", opacity: 1}).slideDown(100);
        $('html').css({
            overflow: 'hidden',
            height: '100%'
        });
    });
});