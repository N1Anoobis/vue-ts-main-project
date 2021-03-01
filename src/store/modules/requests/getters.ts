export default {
  request(state: any, getters: any, rootState: any, rootGetters: any) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req:any) => req.coachId === coachId);
  },
  hasRequests(state: any, getters: any) {
    return getters.requests && getters.requests.length > 0;
  },
};
