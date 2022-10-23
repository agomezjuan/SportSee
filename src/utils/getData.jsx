import axios from "axios";

async function getUserInfo(id) {
  const baseURL = "http://localhost:3000/user";
  try {
    const reqUserInfo = axios.get(`${baseURL}/${id}`);
    const reqUserPerformance = axios.get(`${baseURL}/${id}/performance`);
    const reqUserAverage = axios.get(`${baseURL}/${id}/average-sessions`);
    const reqUserActivity = axios.get(`${baseURL}/${id}/activity`);

    const [userInfo, userPerformance, userAverage, userActivity] = await axios.all([
      reqUserInfo,
      reqUserPerformance,
      reqUserAverage,
      reqUserActivity
    ]);

    const data = userInfo.data.data;

    const firstName = data.userInfos.firstName;
    const lastName = data.userInfos.lastName;
    const age = data.userInfos.age;
    const todayScore = data.todayScore;
    const keyData = data.keyData;
    const activity = userActivity.data.data.sessions.map(session => {
      return {
        day: parseInt(session.day.slice(-2)),
        kilogram: session.kilogram,
        calories: session.calories
      };
    });
    const average = userAverage.data.data.sessions;
    console.log("activity", activity);
    console.log("average", average);

    const performance = userPerformance.data.data.data.map((item, index) => {
      return {
        kind: Object.values(userPerformance.data.data.kind)[index],
        value: item.value
      };
    });
    console.log("Performance", performance);
    return {
      firstName,
      lastName,
      age,
      todayScore,
      keyData,
      activity,
      average,
      performance
    };
  } catch (error) {
    console.log(error);
    window.location.replace("/user/not-found");
  }
}

export default getUserInfo;
