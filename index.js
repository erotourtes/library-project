anime({
    targets: ".moveBtns h2",
    translateY: [-50, 0],
    delay: anime.stagger(100, {start: 250, from: "center"})
});

anime({
    targets: [".mainInfo h1", ".form__group input"],
    scale: [0, 1],
});

anime({
    targets: ".footer",
    translateY: [100, 0],
    easing: "easeOutExpo"
});

anime({
    targets: ".contactInfo p",
    translateX: 30,
    delay: anime.stagger(100, {start: 250})
});

anime({
    targets: ".icons svg",
    translateY: [0, 1, -1, 0],
    delay: anime.stagger(100),
    easing: "easeOutExpo",
    loop: true
});



$(document).ready(()=>{
    $(".moveBtns h2").hover(function(event){
        $(this).addClass("rotate");
    });
    
});