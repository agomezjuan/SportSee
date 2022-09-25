import React from "react";
import "./ProfileHeader.sass";
import useUser from "../../hooks/useUser";

const ProfileHeader = () => {
  const { firstName } = useUser();

  return (
    <header>
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
};

export default ProfileHeader;
