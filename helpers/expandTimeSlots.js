
const expandTimeSlots = (timeSlots) => {
    let time = [];
    let slots = [];
    
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    time = timeSlots.split(", ")
    for(let i = 0; i < time.length; i++){
        time[i] = time[i].replace('M', days[0]);
        time[i] = time[i].replace('T', days[1]);
        time[i] = time[i].replace('W', days[2]);
        time[i] = time[i].replace('H', days[3]);
        time[i] = time[i].replace('F', days[4]);
    }
    let lastIndex = 0;
    time.map((item, index) => {
        item = item.split(/-| /);
        // console.log(slots);
        if(!days.includes(item[0])){
            // console.log(slots[lastIndex]);
            slots[lastIndex].times.push({
                start: item[0],
                end: item[1],
            })
        }
        else
        {
            slots.push({
                day: item[0],
                times: [{
                    start: item[1],
                    end: item[2],
                }]
            })
            lastIndex = slots.length-1;
        }
    })
    return slots;
}
export default expandTimeSlots;