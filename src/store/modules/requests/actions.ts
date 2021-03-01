import axios from "axios";

export default {
  async contactCoach(context: any, payload: any) {
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit("addRequest", newRequest);

    const response: any = await axios.post(
      `https://vue-project-a1f55-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      { ...newRequest }
    );
    // newRequest.id = response.name;
    // context.commit("registerCoach", { ...coachData, id: userId });
  },

  // async loadCoaches(context: any, payload: any) {
  //   const response: any = await axios.get(
  //     `https://vue-project-a1f55-default-rtdb.europe-west1.firebasedatabase.app/.json`
  //   );
  //   if (!response.data) {
  //     const error = new Error(response.message || "Failed to fetch!");
  //     throw error;
  //   }

  //   const data = response.data;
  //   const coaches = [];
  //   for (const key in data) {
  //     if (Object.prototype.hasOwnProperty.call(data, key)) {
  //       const element = data[key];
  //       const coach = {
  //         id: key,
  //         firstName: element.firstName,
  //         lastName: element.lastName,
  //         description: element.description,
  //         hourlyRate: element.hourlyRate,
  //         areas: element.areas,
  //       };
  //       coaches.push(coach);
  //     }
  //     context.commit("setCoaches", coaches);
  //   }
  // },

  // },
};
