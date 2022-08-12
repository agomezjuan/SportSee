import React from 'react'

const ProfileHeader = ({name}) => {
  return (
    <header>
        <h1>Bonjour <span>{name}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  )
}

export default ProfileHeader