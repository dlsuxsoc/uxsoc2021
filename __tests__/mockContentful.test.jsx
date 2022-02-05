import contentful from "../pages/api/utils/contentfulApi"

describe("Testing the Contentful Api", () => {
    const mockEvent = {
        "data": {
          "eventCollection": {
            "items": [
              {
                "title": "CCS Week 20",
                "slug": "ccs-week-2019",
                "description": "Get ready to win fantastic prizes and freebies by dropping by our booths and participating in the different activities we have in store for you. Water you waiting for? Join us and be part of the UX family!",
                "dateStart": "2019-07-09T08:00:00.000+08:00",
                "dateEnd": "2019-07-12T17:00:00.000+08:00"
              }
            ]
          }
        }
      };
    const slug = "ccs-week-2019";
    // contentful.getEvent = jest.fn(slug => mockEvent);
    

    it('called getEvent with call', () =>{
        contentful.call = jest.fn().mockImplementation((q, slug) => { return mockEvent });

        contentful.getEvent(slug)
        
        expect(contentful.call).toBeCalled();
    })

    it('returns error', async () => {
        contentful.call = jest.fn().mockImplementation ((q, slug) => { throw new Error("Could not fetch Contentful Data")})
        let res;
        try{
            res = await contentful.getEvent(slug);
        }catch(e){

            expect(e.message).toBe("Could not fetch Contentful Data");
        }
        // expect(() => await contentful.getEvent(slug)).toThrowError("Could not fetch Contentful Data");

    })


});