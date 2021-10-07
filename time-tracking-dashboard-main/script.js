const URL = 'https://steppenhasen.github.io/FrontEnd-Exercises/time-tracking-dashboard-main/data.json'
let background_dict = [
    "background-color: hsl(15, 100%, 70%);background-image: url(./images/icon-work.svg);border-radius: 15px;background-repeat: no-repeat;background-position: top right;",
    "background-color: hsl(195, 74%, 62%);background-image: url(./images/icon-play.svg);border-radius: 15px;background-repeat: no-repeat;background-position: top right;",
    "background-color: hsl(348, 100%, 68%);background-image: url(./images/icon-study.svg);border-radius: 15px;background-repeat: no-repeat;background-position: top right;",
    "background-color: hsl(145, 58%, 55%);background-image: url(./images/icon-exercise.svg);border-radius: 15px;background-repeat: no-repeat;background-position: top right;",
    "background-color: hsl(264, 64%, 52%);background-image: url(./images/icon-social.svg);border-radius: 15px;background-repeat: no-repeat;background-position: top right;",
    "background-color: hsl(43, 84%, 65%);background-image: url(./images/icon-self-care.svg);border-radius: 15px;background-repeat: no-repeat;background-position: top right;"
]

let request = new XMLHttpRequest()                                     
request.open('GET', URL);
request.responseType = 'json';
request.send();
request.onload = function() {
    let timeData = request.response
    addElement("daily", timeData)
}


function addElement(a, objData, bg_style_dict=background_dict) {
    for (let i = 0; i < objData.length; i++) {
        let backgroundBox = document.createElement("div")
        backgroundBox.className = "backgroundbox"
        backgroundBox.style =bg_style_dict[i]
        let parent_node = document.getElementById("container")
        parent_node.appendChild(backgroundBox)

        let current_time = objData[i]["timeframes"][a]["current"]
        let previous_time = objData[i]["timeframes"][a]["previous"]
        let info_box = document.createElement("div")
        info_box.className = "area_info"
        info_box.innerHTML ="<h2>"+objData[i]["title"]+"</h2>\n<h3 id='today_time_work'>"+current_time+"hrs</h3>\n<p id='previous_time_work'>Last Week - "+previous_time+" hrs</p>"
        backgroundBox.appendChild(info_box)
    }
}

function setTimePeriod(time) {
    let request = new XMLHttpRequest()                                     
    request.open('GET', URL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        let timeData = request.response
        let array_to_remove = document.getElementsByClassName("backgroundbox")
        for (let i = array_to_remove.length - 1; i >= 0 ; i--) {
            array_to_remove[i].remove()
        }
        addElement(time, timeData)
    }
}