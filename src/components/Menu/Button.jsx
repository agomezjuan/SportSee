import './Menu.sass'

const Button = ({props}) => {
    const {activity, icon} = props
    
  return (
    <div className='button'>
        <img src={icon} alt={activity} />
    </div>
  )
}

export default Button