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
    translateY: [0, 2, -2, 0],
    delay: anime.stagger(100, {start: 5000}),
    easing: "easeOutExpo",
    loop: true
});

function calculateBackgroundMove(header, event, x) {
        // const cursorX = event.screenX;
        // const cursorY = event.screenY;
        // const screenX = header.width();
        // const screenY = header.height();

        // const x = cursorX / screenX * 100 - 50;
        // const y = cursorY / screenX * 100 - 50;

        const currentPositionX = header.css("background-positionX").slice(0, -1);
        // const currentPositionY = header.css("background-positionY").slice(0, -1);

        // console.log(currentPositionX, x)

        let positionX = currentPositionX + x;
        // let positionY = currentPositionY + y;

        // const step = 200;
        // if (positionX > step)
        //     positionX = step;
        // if (positionX < -step)
        //     positionX = -step;
        // if (positionY > step)
        //     positionY = step;
        // if (positionY < -step)
        //     positionY = -step;
        if (x > currentPositionX)
        positionX = 1
        else
        positionX = -1
        return {positionX};

}



$(document).ready(()=>{
    const header = $("header");

    // $(window).mousemove(function(e) {
    //     const pageX = e.pageX / 2;
    //     const width = 25 / header.width();

    //     const pageY = e.pageY / 2;
    //     const height = 25 / header.width();
        
    //     const calculatePosition = (size, pagePosition) => 50 - size * pagePosition;

    //     header.css({
    //         "background-position": `${calculatePosition(width, pageX)}% ${calculatePosition(height, pageY)}%`
    //     })
    // });
    let prevX = 0;
    let prevY = 0;
     $(window).mousemove(function(e) {
        let backgroundX = parseFloat(header.css("background-positionX").slice(0, -1));
        const mouseX = e.pageX;
        const speed = 0.1;

        if (mouseX > prevX)
            backgroundX += speed;
        else
            backgroundX -= speed;

        if(backgroundX >= 100) {
            backgroundX = 100
        }
        if(backgroundX <= 0) {
            backgroundX = 0;
        }
            
        prevX = mouseX;

        let backgroundY = parseFloat(header.css("background-positionY").slice(0, -1));
        const mouseY = e.pageY;

        if (mouseY > prevY)
            backgroundY += speed;
        else
            backgroundY -= speed;

        if(backgroundY >= 100) {
            backgroundY = 100
        }
        if(backgroundY <= 0) {
            backgroundY = 0;
        }
            
        prevY = mouseY;

        console.log(backgroundX)


        header.css({
            "background-position": `${backgroundX}% ${backgroundY}%`
        })
    });
    
});

