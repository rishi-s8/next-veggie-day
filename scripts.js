
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const possibledays = ["Monday","Tuesday","Thursday"]

const veggyday= new Date('2022-03-22');
const today = new Date();

let day = weekday[today.getDay()];
var days_difference = today.getDate() - veggyday.getDate();   

if(!possibledays.includes(day))
    document.getElementById('answer').innerHTML = "NO";
else{
    if((day === "Thursday" && (days_difference-9)%21 === 0 ) 
    || (day === "Monday" && (days_difference-13)%21 === 0 )
    || (day === "Tuesday" && days_difference%21=== 0 ))
        document.getElementById('answer').innerHTML = "YES";
    else
        document.getElementById('answer').innerHTML = "NO"
}

document.getElementById('date').innerHTML = today;

