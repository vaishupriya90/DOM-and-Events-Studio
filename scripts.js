// Write your JavaScript code here.
// Remember to pay attention to page loading!


function setUpTakeoff() {
    let confirm = window.confirm("Confirm that the shuttle is ready for takeoff");

    if (confirm) {
        let status = document.getElementById("flightStatus");
        status.innerHTML = "Shuttle in flight."

        // Change the background color
        let bg = document.getElementById("shuttleBackground");
        bg.style.backgroundColor = "blue";

        // Increase shuttle height by 10k
        // Get shuttle Height HTML element
        // Trim the innerHTML
        // Convert to Number
        // Increment by 10k
        // Set the innerHTML to the new number
        let altitude = document.getElementById("spaceShuttleHeight");
        altitude.innerHTML = Number(altitude.innerHTML.trim()) + 10000;
    }
}

function setUpLand() {
    window.alert("The shuttle is landing. Landing gear engaged.");

    let status = document.getElementById("flightStatus");
    status.innerHTML = "The shuttle has landed.";

    let bg = document.getElementById("shuttleBackground");
    bg.style.backgroundColor = "green";

    let altitude = document.getElementById("spaceShuttleHeight");
    altitude.innerHTML = 0;
}

function setUpAbort() {
    let confirm = window.confirm("Confirm that you want to abort the mission.");

    if (confirm) {
        let status = document.getElementById("flightStatus");
        status.innerHTML = "Mission aborted.";

        let bg = document.getElementById("shuttleBackground");
        bg.style.backgroundColor = "green";

        let altitude = document.getElementById("spaceShuttleHeight");
        altitude.innerHTML = 0;

        let imgObj = document.getElementById('rocket');
        imgObj.style.position= 'absolute'; 
        imgObj.style.left = '0px'; 
        imgObj.style.bottom = '0px'
    }
}


function setUpLeft() {
    let imgObj = document.getElementById("rocket");

    let oldPosition = parseInt(imgObj.style.left); // 30px || 15px
    console.log(imgObj.style.left);
    if(oldPosition >= 0){
    let newPosition = oldPosition - 10;
    console.log(newPosition);
    imgObj.style.left = newPosition + 'px';
   }
}

function setUpRight(){
    let imgObj = document.getElementById("rocket");

    let oldPosition = parseInt(imgObj.style.left);
    if(oldPosition <=0){
    let newPosition = oldPosition + 10;
    imgObj.style.left = newPosition + "px";
    }
}

function setUpTop(){
    let imgObj = document.getElementById("rocket");

    let oldPosition = parseInt(imgObj.style.bottom);
    let newPosition = oldPosition + 10;
    imgObj.style.bottom = newPosition + "px";

    let altitude = document.getElementById("spaceShuttleHeight");
    altitude.innerHTML = Number(altitude.innerHTML ) + 10000;
}

function setUpBottom(){
    let imgObj = document.getElementById("rocket");

    let oldPosition = parseInt(imgObj.style.bottom);
    let newPosition = oldPosition - 10;
    imgObj.style.bottom = newPosition + "px";

    let altitude = document.getElementById("spaceShuttleHeight");
    altitude.innerHTML = Number(altitude.innerHTML ) - 10000;
}



function loadEvents() {
    let imgObj = document.getElementById('rocket');
    imgObj.style.position= 'absolute'; 
    imgObj.style.left = '0px'; 
    imgObj.style.bottom = '0px';

    let takeOffButton = document.getElementById("takeoff");//get element by ID
    takeOffButton.addEventListener("click", setUpTakeoff);

    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", setUpLand);

    let abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", setUpAbort);

    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click", setUpLeft);

    let rightButton = document.getElementById("right");
    rightButton.addEventListener("click",setUpRight);

    let upButton =  document.getElementById("up");
    upButton.addEventListener("click",setUpTop);

    let downButton = document.getElementById("down");
    downButton.addEventListener("click",setUpBottom);


}


window.addEventListener("load", loadEvents);