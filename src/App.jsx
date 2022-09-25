import { useState, useEffect } from "react";
import UserContext from "./contexts/UserContext";
import Header from "./components/Header";
import MainContainer from "./Layout/MainContainer";
import Menu from "./components/Menu";
import ProfileSection from "./components/ProfileSection";
import "./App.css";
import getUserInfo from "./utils/getData";
import { useParams } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getUser() {
      try {
        const data = await getUserInfo(id);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Header />
        <MainContainer>
          <Menu />
          <ProfileSection />
        </MainContainer>
      </div>
    </UserContext.Provider>
  );
}

export default App;
