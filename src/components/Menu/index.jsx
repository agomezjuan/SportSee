import Button from './Button'
import meditation from '../../assets/meditation.svg'
import swimming from '../../assets/swimming.svg'
import biking from '../../assets/biking.svg'
import lifting from '../../assets/lifting.svg'
import './index.sass'
console.log(meditation);
console.log(swimming);
console.log(biking);
console.log(lifting);
const Menu = () => {

  const buttons = [
    {activity: "Meditation", icon: meditation},
    {activity: "Swimming", icon: swimming},
    {activity: "Biking", icon: biking},
    {activity: "Lifting", icon: lifting},
  ]

  return (
    <aside className='left-menu'>
      <div className="menu-options">
        {buttons.map((button, index) => {return <Button props={button} key={index} />})}
      </div>
        <p>Copiryght, SportSee 2020</p>
    </aside>
  )
}

export default Menu