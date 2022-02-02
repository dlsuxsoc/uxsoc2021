import getNextNDays from '../helpers/getNextNDays';
describe('Testing getNext8Days', () =>{


  it('Gets next 8 days consisting of one day', () => {
    let timeSlots = [];
    let days = [];
    days = ['M','T','W','H','F'];
    for(let i = 0; i < 1; i ++){
      timeSlots.push({
        day : days[i%5],
      });
    }
    let expected = [];
    let date = new Date() 
    while(expected.length < 8){
      date.setDate(date.getDate() + 1)
      if(date.getDay() == 1){
        expected.push(date.toLocaleString("en-us", {month: "long", day: "numeric", year:"numeric"}))
      }
    }

    let res = getNextNDays(timeSlots);

    expect(res).toEqual(expected);
  })

  it('Gets next 8 days consisting of two unique day', () => {
    let timeSlots = [];
    let days = [];
    days = ['M','W','T','H','F'];
    for(let i = 0; i < 2; i ++){
      timeSlots.push({
        day : days[i%5],
      });
    }
    let expected = [];
    let date = new Date() 
    while(expected.length < 8){
      date.setDate(date.getDate() + 1)
      if(date.getDay() == 1 || date.getDay() == 3){
        expected.push(date.toLocaleString("en-us", {month: "long", day: "numeric", year:"numeric"}))
      }
    }
    
    let res = getNextNDays(timeSlots);

    expect(res).toEqual(expected);
  })

  // it('Gets next 8 days consisting of unknown days', () => {
  //   let timeSlots = [];
  //   let days = [];
  //   days = ['Z','T','W','H','F'];
  //   for(let i = 0; i < 1; i ++){
  //     timeSlots.push({
  //       day : days[i%5],
  //     });
  //   }
    
  //   let res = getNextNDays(timeSlots);

  //   console.log(res);
  // })
})
  
  