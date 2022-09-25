import axios from "axios";
import { BrowserRouter, Navigate } from "react-router-dom";
const baseURL = "http://localhost:3000/user/";

async function getUserInfo(id) {
  try {
    const reqUserInfo = axios.get(`${baseURL}${id}`);
    const reqUserPerformance = axios.get(`${baseURL}${id}/performance`);
    const reqUserAverage = axios.get(`${baseURL}${id}/average-sessions`);
    const reqUserActivity = axios.get(`${baseURL}${id}/activity`);

    const [userInfo, userPerformance, userAverage, userActivity] =
      await axios.all([
        reqUserInfo,
        reqUserPerformance,
        reqUserAverage,
        reqUserActivity,
      ]);

    const data = userInfo.data.data;
    const firstName = data.userInfos.firstName;
    const lastName = data.userInfos.lastName;
    const age = data.userInfos.age;
    const todayScore = data.todayScore;
    const keyData = data.keyData;
    const activity = userActivity.data.data.sessions;
    const average = userAverage.data.data.sessions;

    const performance = userPerformance.data.data.data.map();
    console.log(performance);

    return {
      firstName,
      lastName,
      age,
      todayScore,
      keyData,
      activity,
      average,
    };
  } catch (error) {
    if (error.request.response) {
      console.log(error.request.response);
      return (
        <BrowserRouter>
          <Navigate replace to="/user/not-found" />
        </BrowserRouter>
      );
    }
  }
}

export default getUserInfo;
