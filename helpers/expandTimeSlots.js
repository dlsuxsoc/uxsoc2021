
const expandTimeSlots = (timeSlots) => {
    let time = [];
    let slots = [];
    let lastIndex = 0;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    time = timeSlots.split(", ")
    time.map((item, index) => {
        // replace days with their full names
        item = item.replace('M ', days[0]+" ");
        item = item.replace('T', days[1]);
        item = item.replace('W', days[2]);
        item = item.replace('H', days[3]);
        item = item.replace('F', days[4]);
        item = item.split(/-| /);
        // console.log(slots);

        // check if the times are an extension of a day
        if(!days.includes(item[0])){
            // console.log(slots[lastIndex]);
            // add new time slots to existing day
            slots[lastIndex].times.push({
                start: item[0],
                end: item[1],
            })
        }else{
            // new day
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