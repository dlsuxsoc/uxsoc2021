export const getNextNDays = (timeSlots) => {
    //console.log("TIMESLOTS", timeSlots);
    let wordsToNum = {
        "Sunday": 0,
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Su": 0,
        "Mo": 1,
        "Tu": 2,
        "We": 3,
        "Th": 4,
        "Fr": 5,
        "S": 6,
        "M": 1,
        "T": 2,
        "W": 3,
        "H": 4,
        "F": 5,
    }

    let days = timeSlots.map((item) => {
        return wordsToNum[item.day];
    })

    //console.log(days);

    let specificDates = [];
    let counter = 8;
    let myDay = new Date();
    while (counter != 0){
        myDay.setDate(myDay.getDate() + 1);
        //console.log("TODAY IS:", myDay.getDay())
        if(days.includes(myDay.getDay())){
            specificDates.push(`${myDay.toLocaleString("en-us", {month: "long", day: "numeric", year:"numeric"})}`);
            counter--;
        }
    }
    
    //console.log("HELLO", specificDates);
    return specificDates;
}

export default getNextNDays;