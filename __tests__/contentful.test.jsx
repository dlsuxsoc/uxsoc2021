import contentful from "../pages/api/utils/contentfulApi"

describe("Testing the Contentful Api", () => {
    const mockEvent = {
        "data": {
          "eventCollection": {
            "items": [
              {
                "title": "CCS Week 2019",
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
    const getEvent = jest.fn(slug => mockEvent);
    
    it('returns an article with corresponding slug', () => {
        expect(getEvent(slug)).toBe(mockEvent);
    });

    it('called getEvent with slug', () =>{
        expect(getEvent).toHaveBeenCalledWith(slug);
    })


});