import { fortniteStats } from '../connectors';

const resolvers = {
  Query: {
    getFortniteStats() {
      console.log(fortniteStats);
      return fortniteStats.getStats();
    }
  }
};

export default resolvers;
