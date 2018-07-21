import { fortniteStats, getLesson } from '../connectors';

const resolvers = {
  Query: {
    getFortniteStats() {
      console.log(fortniteStats);
      return fortniteStats.getStats();
    },

    getLesson() {
      console.log(getLesson);
      return getLesson.getStats();
    }
  }
};

export default resolvers;
