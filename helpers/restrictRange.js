export const restrictRange = (input, prev, start, end) => {
  // console.log(input, prev, start, end);
  if (isNaN(input)) {
    return "";
  } 
  else if (input === prev && input > end) {
    return end;
  } 
  else if (input >= start && input <= end) {
    return input;
  } 
  else if (input < start) {
    return prev;
  } 
  else return prev;
};
