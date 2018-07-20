import fetch from 'node-fetch';

const fortniteStats = {
  getStats: function() { /* method of the fortniteStats object */
    return fetch('http://fortunecookieapi.herokuapp.com/v1/cookie')
          .then(res => res.json())
          .then(res => {return res[0].fortune.message;})
    },
  };

export { fortniteStats };


// return fetch('https://api.fortnitetracker.com/v1/profile/psn/jimbolar')
//   .then(res => res.json())
//   .then(res => {return res[0].epicUserHandle;})


        //     method: 'GET',
        //     body: JSON.stringify(body),
        //     headers: {
        //       'Content-Type': 'application/json',
        //       'TRN-Api-Key': '405452a2-a7ab-4973-8aa8-72db714fb1f1' /* fortnite api key */
        // }),
