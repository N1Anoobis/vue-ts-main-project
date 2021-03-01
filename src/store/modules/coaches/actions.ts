import axios from "axios";

export default {
  async registerCoach(context: any, data: any) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await axios.put(
      `https://vue-project-a1f55-default-rtdb.europe-west1.firebasedatabase.app/coaches${userId}.json`,
      { ...coachData }
    );
    context.commit("registerCoach", { ...coachData, id: userId });
  },

  async loadCoaches(context: any, payload: any) {
    const response: any = await axios.get(
      `https://vue-project-a1f55-default-rtdb.europe-west1.firebasedatabase.app/.json`
    );
    if (!response.data) {
      const error = new Error(response.message || "Failed to fetch!");
      throw error;
    }

    const data = response.data;
    const coaches = [];
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const element = data[key];
        const coach = {
          id: key,
          firstName: element.firstName,
          lastName: element.lastName,
          description: element.description,
          hourlyRate: element.hourlyRate,
          areas: element.areas,
        };
        coaches.push(coach);
      }
      context.commit("setCoaches", coaches);
    }
  },
};
