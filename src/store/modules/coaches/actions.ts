export default {
  registerCoach(context: any, data: any) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    context.commit("registerCoach", coachData);
  },
};
