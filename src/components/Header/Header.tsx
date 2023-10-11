import './Header.css'
import Back from '../../icons/Back.svg'
import Edit from '../../icons/Edit.svg'

const Header = () => {
  return (
    <div className='header-block'>
        <div className='header-block-left'>
            <img src={Back} alt="Back" />
            <p className='bold'>Trip 1</p>
        </div>
        <img src={Edit} alt="Edit" />
    </div>
  )
}

export default Header