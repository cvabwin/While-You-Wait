var daysUntilMyBirthday = 10;
var str = " days until my birthday. ";
var sadMsg = "Such a long time... :(";
var excitedMsg = "It's coming soon... :)";
var screamMsg = "DAYS UNTIL MY BIRTHDAY!!!";
var oneDayMsg = "DAY UNTIL MY BIRTHDAY!!!";
var bDayMsg = "♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•* \n" +
"♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪ \n" +
"*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«";


if(daysUntilMyBirthday >= 30){
    console.log(daysUntilMyBirthday + str + sadMsg);
}
else if(daysUntilMyBirthday < 30 && daysUntilMyBirthday > 5){
    console.log(daysUntilMyBirthday + str + excitedMsg);
}
else if(daysUntilMyBirthday <= 5 && daysUntilMyBirthday > 1){
    console.log(daysUntilMyBirthday + str + screamMsg);
}
else if(daysUntilMyBirthday == 1){
    console.log(daysUntilMyBirthday + str + oneDayMsg );
}
else if(daysUntilMyBirthday == 0){
    console.log(bDayMsg);
}