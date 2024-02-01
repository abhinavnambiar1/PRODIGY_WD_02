var ms = 0, s = 0, m = 0, h = 0
var timer;

var display = document.querySelector(".timer-Display")
var laps = document.querySelector(".laps")
var laps = document.getElementById("lapsContainer")


function start(){
    // console.log("Hii This is Start Button")
    if(!timer){
        timer = setInterval(run, 10)
    }
}

function run(){
    // console.log("Hii This is Run Function")
    stopwatch.innerHTML = getTimer()
    ms++              
    if(ms == 100){
        ms = 0
        s++
    }
    if(s == 60){
        s = 0
        m++
    }
    if(m == 60){
        m = 0
        h++
    }
    
    if(h == 13){
        h = 1
    } 
}

function getTimer(){
    return (h<10 ? "0" + h: h) + ":" + (m<10 ? "0" + m : m) + ":" + (s<10 ? "0" + s : s) + ":" + (ms<10 ? "0" + ms : ms)
}



function pause(){
    stopTimer()  
}

// function play(){
//     timer = true;
// }

function stopTimer(){
    clearInterval(timer)
    timer = false 
}




function reset(){
    stopTimer()
    ms = 0
    s = 0
    m = 0
    h = 0
    stopwatch.innerHTML = getTimer()
}




function play(){
    if(!timer){
        timer = setInterval(run, 10)
    }   
}


// lap = taking screenshot of current time...
function lap() {
    if(timer) {
        var li = document.createElement("li")
        li.innerHTML = getTimer()
        // Check if laps element is present before appending
        if (laps) {
            laps.appendChild(li)

            // Show laps container
        lapsContainer.style.display = "block";

        // Scroll to the bottom
        lapsContainer.scrollTop = lapsContainer.scrollHeight;
        } else {
            console.error("Caught Error in Appending Laps")
        }
    }
}

function resetLap(){
    // Check if laps element is present before resetting
    if (laps) {
        laps.innerHTML = ""

        // Hide laps container
    lapsContainer.style.display = "none";

    } else {
        console.error("Caught Error in Resetting Laps")
    }
}
