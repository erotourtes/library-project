const delay = 200;
anime({
    targets: ".moveBtns h2",
    translateY: [-50, 0],
    delay: anime.stagger(100, {start: delay + 250, from: "center"})
});

anime({
    targets: [".mainInfo h1", ".form__group input"],
    scale: [0, 1],
    delay: delay / 1.5
});

anime({
    targets: ".footer",
    translateY: [120, 0],
    easing: "easeOutExpo",
    delay: delay
});

anime({
    targets: ".contactInfo p",
    translateX: 30,
    delay: anime.stagger(100, {start: delay + 250})
});

anime({
    targets: ".icons svg",
    translateY: [0, 2, -2, 0],
    delay: anime.stagger(100, {start: delay + 5000}),
    easing: "easeOutExpo",
    loop: true
});


$(document).ready(()=>{
    const header = $("header");

    const prevCoordinates = { x: 0, y: 0}
     $(window).mousemove(function(e) {

        const speed = 0.1;
        const backgroundX = getBackgroundX(header, e, speed, prevCoordinates);
        const backgroundY = getBackgroundY(header, e, speed, prevCoordinates);


        header.css({
            "background-position": `${backgroundX}% ${backgroundY}%`
        })
    });
    
});

function getBackgroundX(header, e, speed, prevCoordinates) {
        let backgroundX = parseFloat(header.css("background-positionX").slice(0, -1));
        const mouseX = e.pageX;

        if (mouseX > prevCoordinates.x)
            backgroundX += speed;
        else
            backgroundX -= speed;

        if(backgroundX >= 100) {
            backgroundX = 100
        }
        if(backgroundX <= 0) {
            backgroundX = 0;
        }
            
        prevCoordinates.x = mouseX;

        return backgroundX;
}

function getBackgroundY(header, e, speed, prevCoordinates) {
        let backgroundY = parseFloat(header.css("background-positionY").slice(0, -1));
        const mouseY = e.pageY;

        if (mouseY > prevCoordinates.y)
            backgroundY += speed;
        else
            backgroundY -= speed;

        if(backgroundY >= 100) {
            backgroundY = 100
        }
        if(backgroundY <= 0) {
            backgroundY = 0;
        }
            
        prevCoordinates.y = mouseY;

        return backgroundY;
}