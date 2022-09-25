import { createContext } from "react";

const UserContext = createContext({
  firstName: "",
  lastName: "",
  age: 0,
  todayScore: 0,
  keyData: {},
  sessions: [],
  performance: [],
});

export default UserContext;
