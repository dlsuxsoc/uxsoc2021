export const getTimeSlotsByDay = (timeSlots, date) => {
    let day = new Date(date).getDay();

    let NumToWords = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    let values = []

    for(let i = 0; i < timeSlots.length; i++){
        if(timeSlots[i].day === NumToWords[day]){
            return timeSlots[i].times.map((item, index)=> {
                return `${item.start}-${item.end}`
            })
        }
    }

    return []
}

export default getTimeSlotsByDay;