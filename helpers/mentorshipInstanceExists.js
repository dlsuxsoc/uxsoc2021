export const mentorshipInstanceExists = (data, key) => {
    let invalid = false;
    for(let i = 0; i < data.length; i++){
        if(key.email.toLowerCase() == data[i].email.toLowerCase() &&
           key.mentor == data[i].mentor &&
           key.date == data[i].date){
               invalid = true;
               break;
           }
    }
    return invalid;
}

export default mentorshipInstanceExists;