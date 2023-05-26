// 5. relaod the page when there are zero balloons left

const maxBalloons = 20;
const balloonColors = [];
let poppedBalloonCount = maxBalloons;

function setBalloonColors() {
    
    const colors = ['black', 'red', 'blue', 'green', 'yellow', 'orange', 'brown', 'pink'];
    let randomColor = 0;

    for(let index = 0; index < maxBalloons; ++index) {
        randomColor = Math.floor(Math.random() * colors.length)
        balloonColors.push(colors[randomColor])
    }
}

function renderBalloons() {
    let balloonElements = ``;
    
    balloonColors.forEach(function(color, position){
        let balloonVisibility = "active"

        if (color == null) {
            balloonVisibility = "popped";
        }

        balloonElements = balloonElements + `<div 
                            class="balloon ${balloonVisibility}" 
                            style="background:${color};"
                            onClick=popBalloon(${position})
                            ></div>`
    })

    let heading = setHeadingCounter(poppedBalloonCount);
    document.getElementById("heading").innerHTML = heading;
    document.getElementById("balloon-map").innerHTML = balloonElements;

    if (poppedBalloonCount === 0) {
        location.reload();
    }
}

function popBalloon(position) {
    balloonColors[position] = null;
    balloonVisibility = "popped";
    --poppedBalloonCount;
    renderBalloons();
}

function setHeadingCounter(count) {
    if (count > 1) {
        return `<h1>Pop the ${count} balloons!</h1>`
    }
    else {
        return `<h1>Pop the last balloon!</h1>`
    }
}


setBalloonColors();
renderBalloons();
