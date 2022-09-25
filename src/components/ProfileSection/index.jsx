import "./ProfileSection.sass";
import ProfileHeader from "../ProfileHeader";
import Activity from "../Activity";
import StatisticsContainer from "../../Layout/StatisticsContainer";

const ProfileSection = () => {
  return (
    <section className="dashboard">
      <ProfileHeader />
      <StatisticsContainer>
        <div className="graphs">
          <Activity />
        </div>
        <div className="key-data"></div>
      </StatisticsContainer>
    </section>
  );
};

export default ProfileSection;
