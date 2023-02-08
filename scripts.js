const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const possibledays = ["Monday","Tuesday","Thursday"]

const veggyday= new Date('2023-01-09');
veggyday.setHours(0,0,0);

var day

for (let i = 0; i < 21; i++) {
    var this_day = new Date();
    this_day.setDate(this_day.getDate() + i);
    this_day.setHours(0,0,0);
    
    day = weekday[this_day.getDay()];
    var time_difference = this_day.getTime() - veggyday.getTime();   
    var days_difference = Math.round(time_difference / (1000 * 60 * 60 * 24));
    if (possibledays.includes(day)) {
        if((day === "Thursday" && (days_difference-17)%21 === 0 ) 
        || (day === "Monday" && (days_difference)%21 === 0 )
        || (day === "Tuesday" && (days_difference-8)%21=== 0 )) {
            break;
        }
    }
}

const today = new Date()
today.setHours(0,0,0);
const today_day = weekday[today.getDay()]
const tomorrow = new Date()
tomorrow.setHours(0,0,0);
tomorrow.setDate(tomorrow.getDate() + 1)
const tomorrow_day = weekday[tomorrow.getDay()]

if (+this_day === +today) {
    document.getElementById('answer').innerHTML = "Today";
} else if (+this_day === +tomorrow) {
    document.getElementById('answer').innerHTML = "Tomorrow";
} else {
    document.getElementById('answer').innerHTML = this_day.toLocaleDateString();
}
