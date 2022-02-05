import expandTimeSlots from "../helpers/expandTimeSlots";

describe('Testing timeslot conversions', () =>{
    describe('Should produce an object separated by day, start time and end time', () => {
        it('One of each day and time', () => {
            let slots = 'M 09:30AM-11:00AM, T 01:00PM-02:00PM, W 07:00AM-08:00AM, H 09:30AM-10:30PM, F 03:00AM-06:00PM';
        
            let expectedSlots = [
              { day: 'Monday', times: [ { start: '09:30AM', end: '11:00AM' } ] },
              { day: 'Tuesday', times:  [ { start: '01:00PM', end: '02:00PM' } ] },
              { day: 'Wednesday', times: [ { start: '07:00AM', end: '08:00AM' } ] },
              { day: 'Thursday', times: [ { start: '09:30AM', end: '10:30PM' } ] },
              { day: 'Friday', times: [ { start: '03:00AM', end: '06:00PM' } ] }
            ]
  
            slots = expandTimeSlots(slots);
  
            expect(slots).toEqual(expectedSlots);
          })
      
        it('Multiple times in a day', () => {
              let slots = 'M 09:30AM-11:00AM, 05:00PM-07:00PM, 03:00PM-04:00PM, T 01:00PM-02:00PM, W 07:00AM-08:00AM, H 09:30AM-10:30PM, F 03:00AM-06:00PM';
              let expectedSlots = [
                { day: 'Monday', times: [ 
                                          { start: '09:30AM', end: '11:00AM' },
                                          { start: '05:00PM', end: '07:00PM' },
                                          { start: '03:00PM', end: '04:00PM' } ] },
                { day: 'Tuesday', times:  [ { start: '01:00PM', end: '02:00PM' } ] },
                { day: 'Wednesday', times: [ { start: '07:00AM', end: '08:00AM' } ] },
                { day: 'Thursday', times: [ { start: '09:30AM', end: '10:30PM' } ] },
                { day: 'Friday', times: [ { start: '03:00AM', end: '06:00PM' } ] }
              ]
  
              slots = expandTimeSlots(slots);
  
              expect(slots).toEqual(expectedSlots);
            })
      
        it('Multiple days with multiple times', () => {
             let slots = 'M 05:00PM-07:00PM, 12:45PM-12:45AM, T 01:00PM-02:00PM, W 07:00AM-08:00AM, 12:45PM-12:45AM, H 09:30AM-10:30AM, F 03:00AM-06:00PM';
             let expectedSlots = [
              { day: 'Monday', times:     [
                                            { start: '05:00PM', end: '07:00PM' },
                                            { start: '12:45PM', end: '12:45AM' } ] },
              { day: 'Tuesday', times:  [ { start: '01:00PM', end: '02:00PM' } ] },
              { day: 'Wednesday', times: [
                                            { start: '07:00AM', end: '08:00AM' },
                                            { start: '12:45PM', end: '12:45AM' } ] },
              { day: 'Thursday', times: [ { start: '09:30AM', end: '10:30AM' } ] },
              { day: 'Friday', times: [ { start: '03:00AM', end: '06:00PM' } ] }
            ]
  
             slots = expandTimeSlots(slots);
  
             expect(slots).toEqual(expectedSlots);
            })
    })
  })
  