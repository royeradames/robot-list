const resolvers = {
  Query: {
    /* Find list all crew members */
    students: (_, __, { dataSources }) => dataSources.trackAPI.getAllStudents(),
  },
};

export default resolvers;
