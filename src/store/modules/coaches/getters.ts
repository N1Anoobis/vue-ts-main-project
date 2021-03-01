export default {
  coaches(state: any) {
    return state.coaches;
  },
  hasCoaches(state: any) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(state: any, getters: any, rootState: any, rootGetters: any) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some((coach: any) => coach.id === userId);
  },
};
