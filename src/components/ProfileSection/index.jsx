import React from "react";
import "./ProfileSection.sass";
import ProfileHeader from "../ProfileHeader";
import Activity from "../Activity";
import StatisticsContainer from "../../Layout/StatisticsContainer";
import KeyDataContainer from "../../Layout/KeyDataContainer";
import useUser from "../../hooks/useUser";

const ProfileSection = () => {
  const { activity } = useUser();
  return (
    <section className="dashboard">
      <ProfileHeader />
      <StatisticsContainer>
        <div className="graphs">
          <Activity data={activity} />
        </div>
        {/* <div className="key-data"></div> */}
        <KeyDataContainer />
      </StatisticsContainer>
    </section>
  );
};

export default ProfileSection;
