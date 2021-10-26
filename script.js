const d = new Date();
var h = d.getHours();
var m = d.getMinutes();

const afterBefore = (hours, minutes) => {

    if(minutes == 0){
        if(hours>12){
            var m = "PM"
            hours = hours - 12
        }
        else {
            var m = "AM"
        }

        document.querySelector("#currentTime").innerHTML = "It is " + hours + ":00 " + m;
    }
    
    else if(minutes < 30){
        if(hours>12){
            var m = "PM"
            hours = hours - 12
        }
        else {
            var m = "AM"
        }

        document.querySelector("#currentTime").innerHTML = "It is " + minutes + " minutes after " + hours + ":00 " + m;
    }

    else{
        if(hours >= 12){
            var m = "PM"
            hours = hours - 12
        }
        else {
            var m = "AM"
        }

        document.querySelector("#currentTime").innerHTML = "It is " + (60 - minutes) + " minutes until " + (hours + 1) + ":00 " + m;
    }
}

const displayThanks = () => {
    let name = document.querySelector("#firstName").value;

    if(name){
        document.querySelector("#thanks").innerHTML = "Thank you for your submission, " + name;
        document.querySelector("#error").innerHTML = ""
    }
    else{
        document.querySelector("#error").innerHTML = "Please enter your first name in the box above.";
        document.querySelector("#thanks").innerHTML = "";
    }
}

document.addEventListener("load", afterBefore(h, m));
document.querySelector("button").addEventListener("click", displayThanks);