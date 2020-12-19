import '../../containers/Navbar/Navbar.css';
import HamburgerIcon from './Hamburger_icon.png';

const Hamburger = ({className, onClick}) => {


    return(
        <button onClick={onClick} className = {className}>
            <img src={HamburgerIcon} alt="hamburger_icon"  className = {className}/>
        </button>
    )
}

export default Hamburger