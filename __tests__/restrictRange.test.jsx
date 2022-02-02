import { restrictRange } from "../helpers/restrictRange";

describe('Testing Restricting Range', () => {
    it('input is a letter', () => {
      let a = 'a';
      let b = 5;
      let c = 0;
      let d = 4;
  
      let num = restrictRange(a,b,c,d);
      
      expect(num).toBe("");
    })
  
    it('input is less than start', () => {
      let a = 4;
      let b = 5;
      let c = 5;
      let d = 10;
  
      let num = restrictRange(a,b,c,d);
      expect(num).toBe(5);
    })
  
    it('input is greater than start less than end', () => {
      let a = 5;
      let b = 1;
      let c = 0;
      let d = 10;
  
      let num = restrictRange(a,b,c,d);

      expect(num).toBe(5);
    })
  
    it('input is equal to prev and greater than end', () => {
      let a = 5;
      let b = 5;
      let c = 0;
      let d = 4;
  
      let num = restrictRange(a,b,c,d);

      expect(num).toBe(4);
    })
  
  })