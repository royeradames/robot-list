const resolvers = {
  Query: {
    /* Find list all crew members */
    students: (_, __, { dataSources }) => dataSources.trackAPI.getAllStudents(),
  },
  Students: {
    average: ({ grades }, __, ___) => {
      let sum = 0;
      grades.forEach((grade) => {
        sum += Number(grade);
      });
      const average = `${sum / grades.length}%`;
      return average;
    },
  },
};

export default resolvers;
