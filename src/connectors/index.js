import fetch from 'node-fetch';

const fortniteStats = {
  getStats: function() { /* method of the fortniteStats object */
    return fetch('https://api.fortnitetracker.com/v1/profile/psn/jimbolar')
      .then(res => res.json())
      .then(res => {
        return res[0].epicUserHandle;
      });
  },
};

export { fortniteStats };
