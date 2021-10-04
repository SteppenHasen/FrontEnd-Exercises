const URL = 'https://steppenhasen.github.io/FrontEnd-Exercises/time-tracking-dashboard-main/data.json'

data = $.getJSON(URL, function(data) {
    return data
});

console.log(data)