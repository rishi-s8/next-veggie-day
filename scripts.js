const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const possibledays = ["Monday","Tuesday","Thursday"]

const veggyday= new Date('2023-01-09');
veggyday.setHours(0,0,0);
const today = new Date();
today.setHours(0,0,0);

let day = weekday[today.getDay()];
var time_difference = today.getTime() - veggyday.getTime();   
var days_difference = Math.round(time_difference / (1000 * 60 * 60 * 24));  

if(!possibledays.includes(day))
    document.getElementById('answer').innerHTML = "NO";
else{
    if((day === "Thursday" && (days_difference-17)%21 === 0 ) 
    || (day === "Monday" && (days_difference-)%21 === 0 )
    || (day === "Tuesday" && (days_difference-8)%21=== 0 ))
        document.getElementById('answer').innerHTML = "YES";
    else
        document.getElementById('answer').innerHTML = "NO"
}

document.getElementById('date').innerHTML = today;
