$(document).ready(()=>{
    $(".menu").slideUp();
    $("input").on("change", function(){
        $(".button-74").first().on("click", ()=>{
            alert("I have not implemented it yet😥")
        });
        $(".button-74").last().on("click", ()=>{
            $(".menu").slideUp(50);
            setTimeout(()=>{
                $(".menu").css({"-webkit-transform":"translateY(-100%)", opacity: 0});
            }, 100);
            $(this).prop("value", "Томас Манн");
        });
        $(".menu").css({"-webkit-transform":"translateY(0%)", opacity: 1}).slideDown(100);
    });
});