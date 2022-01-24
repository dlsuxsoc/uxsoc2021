import getMentors from "../pages/api/getMentors";
jest.setTimeout('10000');
describe("Get mentors testing", () => {
    it('should get mentors',async  () =>{
        let a,b;
        await getMentors(a,b);

        console.log(b);
    })
})